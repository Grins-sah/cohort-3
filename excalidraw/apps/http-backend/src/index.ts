import express, { Application,Request,Response } from 'express'
import z from 'zod'
import bcrypt from 'bcrypt'
import { prisma, Prisma, PrismaClient } from '@repo/db';
const app:Application = express();
app.use(express.json())
const userSchema = z.object({
    name:z.string().min(5).max(14),
    nickname:z.string().min(3).max(6),
    password:z.string().min(5).max(100)
})
type users = z.infer<typeof userSchema>;

interface RequestUser extends Request{
    body:users
}

app.post('/signup',async (req:RequestUser,res:Response):Promise<void>=>{
    const data = req.body;
    console.log(data);
    const result = userSchema.safeParse(data);
    if(result.success){
        const hasedPassword = await bcrypt.hash(result.data.password ,5);
        result.data.password=hasedPassword;
        const dbRes = await prisma.user.create({
            data:result.data
        })
        res.send({
            msg:dbRes
        })
    }else{
        res.send({
            msg:result.error
        })
    }

    
})
app.listen(3000);


