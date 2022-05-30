import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import bcrypt from "bcrypt";
import { hash } from "bcrypt";


const app = express()

const saltRounds = 10;

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/authoDB",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}, () => {
    console.log("DB connected");
})


const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String
})

const User = new mongoose.model("User",userSchema)

//Routes
app.post("/login",(req,res) => {
    const { email, password } =req.body

    User.findOne({ email: email}, (err, user) => {
        if(user){
            
            if (bcrypt.compareSync(password, user.password)){
                res.send({message: "login success", user: user})
            } else {
                res.send({message:"incorrect password"})
            }
        } else {
            res.send({message:"User not Registered."})
        }
    })
})

app.post("/register",(req,res) => {
    const { fname, lname, email, password } =req.body

    User.findOne({email:email},(err,user) => {
         if(user){
             res.send({ message: "User already existed"})
         } else {
            let hash = bcrypt.hashSync(password, saltRounds);

            const user = new User({
                fname,
                lname,
                email,
                password:hash
        
            })  
            user.save( err => {
                if(err){
                    res.send(err)
                } else {
                    res.send({ message: "successfully Registered"})
                }
            })

         }
    })

})

app.listen(9002,() => {
    console.log("BE started at port 9002")
})