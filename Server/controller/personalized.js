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
                universities:result.rows
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
        console.log(req.params.userID);
        console.log(req.params)
        const result=await analysis.getProbable(req.params.userID);
        console.log("got the result back from database");
        console.log(result);
        res.status(201).json({
            status:"success",
            data:{
                universities:result.rows
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
        console.log(req.params.userID);
     console.log(req)
        const result=await analysis.getSafe(req.params.userID);
        console.log("got the result back from database");
        console.log(result);
        res.status(201).json({
            status:"success",
            data:{
                universities:result.rows
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
        const result=await analysis.getAmbitious(req.params.userID);
        console.log("got the result back from database");
        console.log(result);
        res.status(201).json({
            status:"success",
            data:{
                universities:result.rows
            }
        })
    }
    catch(err){
        console.log(err);
    }
}
