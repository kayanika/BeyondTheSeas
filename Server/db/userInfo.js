const db=require('./index');



class userInfo{
    constructor(){  
    }

    addUser= async function(userName) {
        const query = "";
        
        const params = [userName];
        const result = await db.query(query, params);
        return result;
    }

        

    getUser=async function(userName,password){
        const query="SELECT * FROM public.user WHERE \"Name\"=$1 AND \"Password\"=$2";
        const params=[userName,password];
        const result=await db.query(query,params);
        return result;
    } 
    
    updateUser=async function(userName,password){
        const query="UPDATE public.user SET \"Password\"=$2 WHERE \"Name\"=$1";
        const params=[userName,password];
        const result=await db.query(query,params);
        return result;
    }

    
    
}



exports.userInfo=userInfo;