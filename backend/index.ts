import express from "express"
import authRoutes from "./routes/auth"
import moodRoutes from "./routes/moodSts"
import getYourMoodStatuses from "./routes/getMoodSts"
import verificationCode from "./routes/auth"
import chatRoutes from "./routes/chat"
import journalingRoutes from "./routes/journaling"

const app = express()

app.get("/", (req:any, res:any) => {
    return res.json({ message: "API is working" })
})

app.use(express.json());
app.use(express.urlencoded({extended: true}))

//routes
app.use("/auth", authRoutes)
app.use("/moodSts", moodRoutes)
app.use("/getMoodSts", getYourMoodStatuses)
app.use("/verification-code", verificationCode)
app.use("/chatWithMe", chatRoutes)
app.use("/startJournaling", journalingRoutes)

app.listen(8000, () => {
    console.log("Server is running on port 8000")
})




