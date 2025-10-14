import { Router } from 'express';
import z, { email, success } from 'zod';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken"
import { prisma } from '../lib/prisma';
// import { sendEmail } from "../lib/resend";
import { TOTP } from 'totp-generator';
import base32 from 'hi-base32';
import { authMiddleware } from '../auth-middleware';



const router = Router();


router.post("/signup", async (req, res) => {
    try {
        const signupSchema =  z.object({
            username: z.string().min(3, "Username must be at least 3 characters"),
            email: z.email(),
            password: z.string().min(6, "Password must be at least 6 characters")
        })

        const result = signupSchema.safeParse(req.body)
        if(!result.success) {
            console.log("Validation: ", result.error.issues)
            return res.status(400).json({success: false, errors: result.error.issues})
        }

        const {username, email, password} = result.data;
        // console.log(result.data);

        const existingUser = await prisma.user.findUnique({
            where: {email}
        })

        if(existingUser) {
            return res
            .status(400)
            .json({success: false, message: "User with this email already exist"})
        }

        const hashPassword = await bcrypt.hash(password, 10)

        //saving user to db
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashPassword
            }
        })

        //have to covert this into base32 strings here
        // console.log(user)
        // const {otp, expires} = await TOTP.generate(base32.encode(user.email))
        // const generatedOtp = process.env.NODE_ENV === "development" ? "12345" : otp

        // console.log("Node env ", process.env.NODE_ENV)
        // console.log(`Log into ymk-app, ${generatedOtp}`)
        
        // sendEmail(user.email, "Your ymw-app sign-in code", `Your youth-mental-wellness app sign-in code is ${generatedOtp}`)
        

        return res
        .status(201)
        .json({success: true, message: "Account created successfully", user: {id: user.id, email: user.email, username: user.username}})
    } catch (e) {
        console.log("Error: ", e);
        return res
        .status(500)
        .json({success: false, message: "Something went wrong while creating your account"})
    }
})

// router.post("/verify-otp", async(req, res) => {
//     const {email, userEnteredOtp} = req.body

//     //have to covert this into base32 strings here  
//     const {otp} = await TOTP.generate(base32.encode(email))
//     const generatedOtp = process.env.NODE_ENV === "development" ? "12345" : otp
    
//     if(generatedOtp !== userEnteredOtp) {
//         return res.status(400).json({message: "Invalid Otp", success: false})
//     }

//     return res.status(200).json({message: "Otp verified successfully", success: true})
// })

router.post("/login", async (req, res) => {
    try {
        const loginSchema = z.object({
            email: z.email("Invalid email address"),
            password: z.string().min(6, "Password must be at least 6 characters")
        })

        const result = loginSchema.safeParse(req.body)
        if(!result.success) {
            return res.status(400).json({success: false, errors: result.error.issues})
        }

        const {email, password} = result.data
        console.log(result.data);

        //find the user in db
        const user = await prisma.user.findUnique({ where: {email} })

        if(!user) {
            return res
            .status(404)
            .json({success: false, message: "User not found"})
        }

        const validPassword = await bcrypt.compare(password, user.password) //user.password is the salt of the register password in signup route
        
        if(!validPassword) {
            return res
            .status(401)
            .json({success: false, message: "Invalid credentials"})
        }

        //signing jwt token
        const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET!)

        return res
        .status(200)
        .json({success: true, message: "User logged in successfully", token: token, user: {id: user.id, email: user.email, pass: user.password}})
        
    } catch (e) {
        console.log("Error: ", e)
        return res.status(500).json({success: false, message: "Something went wrong while signing you in"})
    }
})

router.get("/me", authMiddleware, async (req, res) => {
    const userId = req.userId

    const user = await prisma.user.findUnique({ where: { id: userId } })

    if(!user) {
        res.status(401).send({
            success: false, 
            message: "Unauthorized"
        }); 
        return
    }

    res.json({
        user: {
            id: user?.id,
            email: user?.email
        }
    })

})


export default router
