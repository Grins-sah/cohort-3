import prisma from '@prisma/client'
import exp from 'constants';
import  express  from 'express';
const app = express();
app.use(express.json());




const client = new prisma.PrismaClient();
app.get('/todo/:id',async (req,res)=>{
    const users = await client.user.findFirst({
        where:{
            id:parseInt(req.params.id)
        }
    })
    console.log(users);
    res.send(users);
    
})
app.listen(3000,()=>{
    console.log("server is on");
})
