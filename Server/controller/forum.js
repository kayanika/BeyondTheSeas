const userInfo = require('../db/forumInfo').forumInfo;

const forum=new forumInfo();


exports.postQuestion= async (req,res,next){
    try{
        console.log("inside postQuestion");
        const result=await forum.postQuestion(req.body.userID,req.body.question);
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


exports.postAnswer= async (req,res,next){
    try{
        console.log("inside postAnswer");
        const result=await forum.postAnswer(req.body.userID,req.body.questionID,req.body.answer);
        console.log("got the result back from database");
        console.log(result);
        res.status(201).json({
            status:"success",
            data:{
                user:result.rows
            }
        })
    }
catch(err)
{   console.log(err);

}
}


exports.searchTopic= async