const personalized = require('../db/academicAnalysis').academicAnalysis;

const analysis=new personalized();
exports.getPersonalized= async function(req,res,next){
    try{
        console.log("inside getPersonalized");
        const result=await analysis.getPersonalized();
        console.log("got the result back from database");
        console.log(result);
        res.status(201).json({
            status:"success",
            data:{
                user:result.rows
            }
        })
    }
    catch(err){
        console.log(err);
    }
}


exports.getProbable = async function(req,res,next){
    try{
        console.log("inside getProbable");
        const result=await analysis.getProbable();
        console.log("got the result back from database");
        console.log(result);
        res.status(201).json({
            status:"success",
            data:{
                user:result.rows
            }
        })
    }
    catch(err){
        console.log(err);
    }
}




exports.getSafe= async function(req,res,next){
    try{
        console.log("inside getSafe");
        const result=await analysis.getSafe();
        console.log("got the result back from database");
        console.log(result);
        res.status(201).json({
            status:"success",
            data:{
                user:result.rows
            }
        })
    }
    catch(err){
        console.log(err);
    }
}



exports.getAmbitious = async function(req,res,next){
    try{
        console.log("inside getAmbitious");
        const result=await analysis.getAmbitious();
        console.log("got the result back from database");
        console.log(result);
        res.status(201).json({
            status:"success",
            data:{
                user:result.rows
            }
        })
    }
    catch(err){
        console.log(err);
    }
}
