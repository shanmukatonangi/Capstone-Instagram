const mongoose=require("mongoose")


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilepic:{
        type: String,

    },
    bio:{
        type:String
    },
    followers:{
        type:Array
    },
    followings:{
        type:Array
    }
   
})


module.exports = mongoose.model("User",userSchema)