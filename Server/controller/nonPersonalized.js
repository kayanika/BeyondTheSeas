const nonPersonalized = require('../db/academicAnalysis').academicAnalysis;

const nonPersonalizedAnalysis=new nonPersonalized();

exports.getNonPersonalized= async function(req,res,next){
    try{
        console.log("inside getPersonalized");
        const result=await nonPersonalizedAnalysis.getNonPersonalized();
        console.log("got the result back from database");
        console.log(result);
        res.status(200).json({
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


exports.getNonPersonalizedFiltered = async function(req,res,next){
    try{
        console.log("inside non personalized filtered");
        if(req.params.filterOption=="scholarship"){
            const result=await nonPersonalizedAnalysis.getNonPersonalizedFilteredScholarship(req.params.filterOption);
            console.log("got the result back from database");
            console.log(result);
            res.status(200).json({
                status:"success",
                data:{
                    user:result.rows
                }
            })
        }
        // else if(req.params.filterOption=="tuitionFees"){
        //     const result=await nonPersonalizedAnalysis.getNonPersonalizedFilteredTuitionFees(req.params.filterOption);
        //     console.log("got the result back from database");
        //     console.log(result);
        //     res.status(200).json({
        //         status:"success",
        //         data:{
        //             user:result.rows
        //         }
        //     })
        // }
        else{
            const result=await nonPersonalizedAnalysis.getNonPersonalizedFilteredTuitionFees(req.params.filterOption);
        console.log("got the result back from database");
        console.log(result);
        res.status(200).json({
            status:"success",
            data:{
                user:result.rows
            }
        })
        }
        
    }
    catch(err){
        console.log(err);
    }
}
