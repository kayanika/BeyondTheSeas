const userInfo = require('../db/userInfo').userInfo;

const user = new userInfo();


exports.getShortlist = async function(req,res,next){
    try{
        console.log("inside getshortlist");
        console.log(req.params.userID);
        const result=await user.getshortlist(req.params.userID);
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

exports.shortlist = async function(req,res,next){
    try{
        console.log("inside shortlist");
        console.log(req.params.userID);
        console.log(req.params.universityID);
        const result=await user.shortlist(req.params.userID,req.params.universityID);
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

exports.getProfile= async function(req,res,next){   
    try{
        console.log("inside getProfile");
        console.log(req.params.userID);
        const result=await user.getProfile(req.params.userID);
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