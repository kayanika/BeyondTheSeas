const nonPersonalized = require('../db/academicAnalysis').academicAnalysis;

const nonPersonalizedAnalysis=new nonPersonalized();

exports.getNonPersonalized= async function(req,res,next){
    try{
        console.log("inside getPersonalized");
        const result=await analysis.getNonPersonalized();
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


exports.getNonPersonalizedFiltered = async function(req,res,next){
    try{
        console.log("inside getProbable");
        const result=await analysis.getNonPersonalizedFiltered();
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
