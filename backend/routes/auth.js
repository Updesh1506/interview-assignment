const express = require("express")
const bcrypt =require("bcryptjs")
const jwt = require("jsonwebtoken")
const User =require("../models/User")

const router =express.Router()

router.post("/register",async(req,res)=>{
    const {name,dob,email,password} =req.body
    try {
        const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: "User already exists" });
        const hashPassword = await bcrypt.hash(password,10)
        const newUser = await User.create({name,dob,email,password:hashPassword})
        const token = jwt.sign({email:newUser.email},process.env.JWT_SECRET)
        res.json({token,user:{name,dob,email}})
    } catch (error) {
        res.status(400).json({error:"user already exists or invalid data"})
    }
})

router.post("/login",async(req,res)=>{
    const {email,password} = req.body
    try {
        const user = await User.findOne({email})
        if(!user) return res.status(400).json({error:"invalid credentials"})
        const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch) return res.status(400).json({error:"invalid credentials"})
        const token =jwt.sign({email:user.email},process.env.JWT_SECRET)
    res.json({token,user:{name:user.name,dob:user.dob,email:user.email}})
    } catch (error) {
        res.status(500).json({error:"Server error"})
    }
})

module.exports =router