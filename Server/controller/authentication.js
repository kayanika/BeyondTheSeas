const userInfo = require('../db/userInfo').userInfo;

const user = new userInfo();


exports.signup = async (req, res, next) => {
    try {
        console.log("inside postSignup");
        const result = await user.addUser(req.body.userName);
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