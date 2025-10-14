import rateLimit from "express-rate-limit";

export const perMinRL = rateLimit({
    windowMs: 60 * 1000, //1 min
    max: 25,
    message: "Too many requests, Try again in a minute.",
    keyGenerator: (req) => {
        return req.body.email
    }
})

export const perHourRL = rateLimit({
    windowMs: 60 * 60 * 1000, //1 hour
    max: 100,
    message: "Too many requests, Try again an hour.",
    keyGenerator: (req) => {
        return req.body.email
    }
})