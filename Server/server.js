require('dotenv').config();
const express=require('express');

const app=express();

app.get('/getUniversities',(req,res)=>{
    comsole.log('getUniversities');
})

const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})