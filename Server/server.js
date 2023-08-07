require('dotenv').config();
const express=require('express');
const morgan=require('morgan'); //prints status of the request plus the time taken to process the request

const db=require('./db');
const cors= require('cors');
const app=express();

// app.use((req,res)=>{   
//     console.log("this is the middleware");
// })

// I can write the middlewares here
app.use(cors());
app.use(express.json());    //takes the request body and parses it into json



// app.get('/getUsers',async (req,res)=>{    //we used async because we are using await
    
//     try{
//         const result= await db.query("SELECT * FROM public.user");
//         console.log(result);
//         res.status(200).json({
//             status:"success",
//             results:result.rows.length,
//             data:{
//                 users:result.rows,
//             }
//         })
//     }
//     catch(err){ 

//         console.log(err);
//     }
    
    
// })
// //get one user
// app.get('/getUsers/:id',async (req,res)=>{
//     try{
//         console.log(req.params.id);
//         const result=await db.query("select * from public.user where \"UserID\"=$1",[req.params.id]);
//         console.log(result);
//         res.status(200).json({
//         results:result.rows.length,
//         data:{
//             users:result.rows,
//         }
//         })
//     }
//     catch(err){
//         console.log(err);
//     }
// })
// //Create a new user
// app.post('/createUser',async (req,res)=>{

//     try{

//         console.log(req.body);
//         const result=await db.query("INSERT INTO public.user(\"UserID\",\"Name\") VALUES($1,$2) ",[req.body.UserID,req.body.Name]);

//         console.log(result);
//         res.status(201).json({
//             status:"success",
//             data:{
//                 users:result.rows[0],
//             }
//         })

//     }
//     catch(err){
//         console.log("Caught an error")
//         console.log(err);
//     }
// })
// app.get('/getUniversities/:id',(req,res)=>{ 
//     console.log(req.params.id);
// })



// app.get('/getUniversities',(req,res)=>{ 
//     res.json({
//         "universities":["University of hongKOng","Texas UNiversity"]
//     });
// })

// app.get('/',(req,res)=>{    
//     console.log('Hello World');
//     res.send('Hello World');
    
// }   )

//Beyond the seas api routing-

const homeRouter=require('./routes/home');
const authRouter=require('./routes/authentication');
const personalizedRouter=require('./routes/personalizedRec');
const nonPersonalizedRouter=require('./routes/nonPersonalized');
const activityRouter=require('./routes/activityManager');
const forumRouter=require('./routes/forum');


//app.use('/api',homeRouter);
app.use('/api/user',authRouter);
app.use('/api/user/:userID/personalized',personalizedRouter);
app.use('/api/user/:userID/nonPersosoalized',nonPersonalizedRouter);
//app.use('/api/user/:userID/activity',activityRouter);
//app.use('/api/user/:userID/forum',forumRouter); 











const port=3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})