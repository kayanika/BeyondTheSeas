const userInfo = require('../db/userInfo').userInfo;

const user = new userInfo();


exports.getShortlist = async function(req,res,next){
    try{
        console.log("inside getshortlist");
        console.log(req.params.userID);
        const result=await user.getShortlist(req.params.userID);
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
        //I HAVE TO CHECK HERE IF IT'S ALREADY SHORTLISTED OR NOT
        const result=await user.shortlist(req.params.userID,req.body.university_id);
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

// exports.getBlacklist = async function(req,res,next){
//     try{
//         console.log("inside getBlacklist");
//         console.log(req.params.userID);
//         const result=await user.getBlacklist(req.params.userID);
//         console.log("got the result back from database");
//         console.log(result);
//         res.status(201).json({
//             status:"success",
//             data:{
//                 universities:result.rows
//             }
//         })
//     }
//     catch(err){
//         console.log(err);
//     }
// }

exports.blacklist = async function(req,res,next){
    try{
        console.log("inside blacklist");
        console.log(req.params.userID);
        console.log(req.params.universityID);
        //I HAVE TO CHECK HERE IF IT'S ALREADY BLACKLISTED OR NOT
        const result=await user.blacklist(req.params.userID,req.body.university_id);
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