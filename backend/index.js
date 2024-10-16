const express = require("express")
const app = express()
const mongoose = require('mongoose');
const authRoute =  require("./routes/Auth")
const cors=require("cors")

app.use(express.json())
app.use(cors())

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://b22:b22@cluster0.nrwpf.mongodb.net/',console.log("DB connected"));

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


app.use("/ig/auth",authRoute)  //localhost:8888/ig/auth

app.listen(8888,()=>{
    console.log("server is running on port 8888")

})



