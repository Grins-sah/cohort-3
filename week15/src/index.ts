import express  from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import  { z } from "zod"
const app = express();
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {type:String,require: true,unique:true},
    password :{type:String,require:true}
})
mongoose.connect("mongodb+srv://admin:g!VQGQn7tqB*82P@cluster0.ekkva.mongodb.net/brain")
const userModel = mongoose.model('users',userSchema);
app.use(express.json());




app.post('/api/v1/signup',async (req,res)=>{
    console.log(req);
    const username = req.body.username;
    const password = req.body.password;
    console.log(z.string(username).min(3).max(10));
    try{
        await userModel.create({
            username:username,
            password:password
        })
        res.status(200).json({
            msg:"success"
        })
        
    }
    catch(err){
        res.status(500).json({
            msg:err
        })
    }

})

app.listen(3000);