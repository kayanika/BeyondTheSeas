require('dotenv').config();
const express=require('express');
const morgan=require('morgan'); //prints status of the request plus the time taken to process the request

const db=require('./db');
const app=express();

// app.use((req,res)=>{   
//     console.log("this is the middleware");
// })

// I can write the middlewares here
app.use(express.json());    //takes the request body and parses it into json

app.get('/getUsers',async (req,res)=>{    //we used async because we are using await
    
    try{
        const result= await db.query("SELECT * FROM public.user");
        console.log(result);
        res.status(200).json({
            status:"success",
            results:result.rows.length,
            data:{
                users:result.rows,
            }
        })
    }
    catch(err){ 

        console.log(err);
    }
    
    
})
//get one user
app.get('/getUsers/:id',async (req,res)=>{
    try{
        console.log(req.params.id);
        const result=await db.query("select * from public.user where \"UserID\"=$1",[req.params.id]);
        console.log(result);
        res.status(200).json({
        results:result.rows.length,
        data:{
            users:result.rows,
        }
        })
    }
    catch(err){
        console.log(err);
    }
})

app.post('/createUser',(req,res)=>{
    console.log("Got a new user");
    console.log(req.body);
})
app.get('/getUniversities/:id',(req,res)=>{ 
    console.log(req.params.id);
})

//Create a new user

app.get('/getUniversities',(req,res)=>{ 
    res.json({
        "universities":["University of hongKOng","Texas UNiversity"]
    });
})

app.get('/',(req,res)=>{    
    console.log('Hello World');
    res.send('Hello World');
    
}   )







const port=3001;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})