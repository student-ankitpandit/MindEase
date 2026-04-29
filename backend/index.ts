import { ensureEncryptionKey } from "./lib/setupKey";
// Ensure encryption key is generated and saved to .env before anything else starts
ensureEncryptionKey();

import express from "express";
import authRoutes from "./routes/auth";
import moodRoutes from "./routes/moodSts";
import getYourMoodStatuses from "./routes/getMoodSts";
import verificationCode from "./routes/auth";
import chatRoutes from "./routes/chat";
import journalingRoutes from "./routes/journaling";
import dashboardRoutes from "./routes/dashboard";
import feedbackRoutes from "./routes/feedback";
import copingRoutes from "./routes/coping";
import storiesRoutes from "./routes/stories";
import voiceRoutes from "./routes/voice";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import prisma from "./lib/prisma";


const app = express();


app.get("/", (req: any, res: any) => {
  return res.json({ message: "Hello from server" });
});

const PORT = process.env.PORT || 8000

// cors
app.use(
  cors({
    origin: "https://mindease-production-24e8.up.railway.app/", 
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
    cookie: {
      secure: false,
      httpOnly: true,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
      path: '/'
    }
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
    res.redirect(`${process.env.FRONTEND_URL!}/dashboard`);
  },
);

app.get("/api/user", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: "Not authenticated" });
  }
  return res.json(req.user);
});

app.get("/auth/v1/logout", (req, res) => {
  req.logOut((err) => {
    if (err) return res.status(500).json({ error: "Logout failed" });

    req.session.destroy((err) => {
      if (err) {
        console.error('Session destroy error:', err);
      }
      res.clearCookie('connect.sid', {
        path: '/',
        httpOnly: true,
        sameSite: 'lax'
      });
      
      res.redirect(process.env.FRONTEND_URL!);
    });
  });
});

// route-level middleware
app.use("/auth", authRoutes);
app.use("/moodSts", moodRoutes);
app.use("/getMoodSts", getYourMoodStatuses);
app.use("/verification-code", verificationCode);
app.use("/chatWithMe", chatRoutes);
app.use("/startJournaling", journalingRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/feedback", feedbackRoutes);
app.use("/coping", copingRoutes);
app.use("/stories", storiesRoutes);
app.use("/voice", voiceRoutes);

app.listen(PORT, () => {
  console.log(`Server is up and listening on port ${PORT}`);
});
