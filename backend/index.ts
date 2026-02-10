import express from "express";
import authRoutes from "./routes/auth";
import moodRoutes from "./routes/moodSts";
import getYourMoodStatuses from "./routes/getMoodSts";
import verificationCode from "./routes/auth";
import chatRoutes from "./routes/chat";
import journalingRoutes from "./routes/journaling";
import cookieParser from "cookie-parser";
import cors from "cors";
import session from "express-session";
import { PrismaClient } from "./prisma/generated/prisma";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import prisma from "./lib/prisma";



// console.log('Google Callback URL:', process.env.GOOGLE_CALLBACK_URL);
// console.log("FRONTEND_URL:", process.env.FRONTEND_URL);  
//     console.log("Redirecting to:", process.env.FRONTEND_URL);


const app = express();


app.get("/", (req: any, res: any) => {
  return res.json({ message: "Hello from server" });
});

// cors
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    allowedHeaders: ["Content-Type, Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  }),
);

// express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// session
app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
  }),
);

// passport
app.use(passport.initialize());
app.use(passport.session());

// google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_CALLBACK_URL!,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await prisma.user.findUnique({
          where: { googleId: profile.id },
        });
        if (!user) {
          user = await prisma.user.create({
            data: {
              id: profile.id,
              googleId: profile.id,
              email: profile.emails![0]?.value || "",
              name: profile.displayName,
              password: "",
            },
          });
        }
        return done(null, user);
      } catch (error) {
        return done(error as Error, undefined);
      }
    },
  ),
);



// serialize
passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

// deserialize
passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// routes
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.FRONTEND_URL}/login`,
  }),
  (req, res) => {
    res.redirect(process.env.FRONTEND_URL!);
  },
);

// app.get('/auth/google/callback', (req, res) => {
//   res.send('Callback route is working!');
// });

app.get("/api/user", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: "Not authenticated" });
  }
  return res.json(req.user);
});

app.get("/auth/logout", (req, res) => {
  req.logOut((err) => {
    if (err) return res.status(500).json({ error: "Logout failed" });
    res.redirect(process.env.FRONTEND_URL!);
  });
});

// route-level middleware
app.use("/auth", authRoutes);
app.use("/moodSts", moodRoutes);
app.use("/getMoodSts", getYourMoodStatuses);
app.use("/verification-code", verificationCode);
app.use("/chatWithMe", chatRoutes);
app.use("/startJournaling", journalingRoutes);

app.listen(8000, () => {
  console.log("Server is up and listening on port 8000");
});
