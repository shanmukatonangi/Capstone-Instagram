const router = require("express").Router()
const User=require("../models/Userscol")

router.post("/register",async(req,res)=>{  //localhost:8888/ig/auth/register
  await new User({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password
   }).save()
   res.send("registered")
})





module.exports= router