const db=require('./index');



class userInfo{
    constructor(){  
    }

    addUser= async function(userName) {
        const query = "INSERT INTO public.user(\"Name\") VALUES($1) returning * ";
        
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


    
    
}



exports.userInfo=userInfo;