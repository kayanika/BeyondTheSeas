const userInfo = require('../db/userInfo').userInfo;

const user = new userInfo();


exports.signup = async (req, res, next) => {
    try {
        console.log("inside postSignup");
        const result = await user.addUser(req.body.userName,req.body.password);
        console.log("got the result back from database");
        
        console.log(result);
        res.status(201).json({
            status: "success",
            data: {
                user: result.rows
            }
        })
    }
    catch (err) {
        console.log(err);
    }
}
 
exports.addProfile= async (req, res, next) => {
    try {
        console.log("inside addProfile");
        const result = await user.addProfile(req.params.userID,req.body.name, req.body.undergrad_institution, req.body.age, req.body.gender, req.body.yearofpassing, req.body.projects, req.body.publications_link, req.body.cgpa, req.body.gre_score, req.body.current_address,  req.body.in_need_of_scholarship, req.body.maximum_tuition_fees);
        
        console.log(result);
        res.status(201).json({
            status: "success",
            data: {
                user: result.rows
            }
        })
    }
    catch (err) {
        console.log(err);
    }

}

exports.verifyLogin = async (req, res, next) => {
    try {
        console.log("inside postLogin");
        const result = await user.getUser(req.body.userName,req.body.password);
        console.log("got the result back from database");
        console.log(result);
        if(result.rows.length==0){
            res.status(404).json({
                status: "failure",
                data: {
                    "msg": "Invalid username or password"
                }
            })
        }
        
        const student=result.rows[0];
        console.log(student);
        if(res)
        res.status(201).json({
            status: "success",
            data: {
                user: result.rows[0]
            }
        })
    }
    catch (err) {
        console.log(err);
    }
}

exports.update =async(req,res,next)=>{
    try{
        console.log("inside update");
        const result=await user.updateUser(req.body.userName,req.body.id);
        console.log("got the result back from database");
        console.log(result);
        res.status(201).json({
            status:"success",
            data:{
                user:result.rows
            }
        })
    }
    catch (err){
        console.log(err);
    }

}