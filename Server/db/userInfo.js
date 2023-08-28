const db=require('./index');



class userInfo{
    constructor(){  
    }

    addUser= async function(userName,password) {
        const query = `INSERT INTO public.users(
             username, password)
            VALUES ($1, $2) returning *;`;
        
        const params = [userName, password];
        const result = await db.query(query, params);
        return result;
    }

        

    getUser=async function(userName,password){
        const query="SELECT * FROM public.users WHERE \"username\"=$1 AND \"password\"=$2";
        const params=[userName,password];
        const result=await db.query(query,params);
        return result;
    } 

    getUserByUserID=async function(UserID){
        const query="SELECT * FROM public.users WHERE \"userid\"=$1";
        const params=[UserID];
        const result=await db.query(query,params);
        return result;
    }
    
    // updateUser=async function(userName,password){
    //     const query="UPDATE public.user SET \"Password\"=$2 WHERE \"Name\"=$1";
    //     const params=[userName,password];
    //     const result=await db.query(query,params);
    //     return result;
    // }

    addProfile= async function(Id,name, undergrad_institution, age, gender, yearofpassing, projects, publications_link, cgpa, gre_score, current_address,  in_need_of_scholarship, maximum_tuition_fees) {
        console.log("inside addProfile in db");
        const user=await this.getUserByUserID(Id);
        console.log(user);  
        const username=user.rows[0].username;
        console.log(username);
        const password=user.rows[0].password;
        console.log(password);
        const query = `INSERT INTO student(name, undergrad_institution, age, gender, yearofpassing, projects, publications_link, cgpa, gre_score, current_address,  in_need_of_scholarship, maximum_tuition_fees, username, password)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);`;
        
        const params = [name, undergrad_institution, age, gender, yearofpassing, projects, publications_link, cgpa, gre_score, current_address, in_need_of_scholarship, maximum_tuition_fees, username, password];
        const result = await db.query(query, params);
        return result;
    }

    getShortlist= async function(userID){
        const query=`SELECT
        s.name AS student_name,
        u.name as university_name,
        u.cs_ranking,
        u.location,
        u.website_link
      FROM
        student_university_shortlist sur
      INNER JOIN student s ON sur.student_id = s.student_id
      INNER JOIN university u ON sur.university_id = u.university_id
     
       WHERE sur.student_id=$1`;
        const params=[userID];
        const result=await db.query(query,params);
        return result;
        
    }

    shortlist=async function(userID,universityID){
        const query=`INSERT INTO student_university_shortlist (student_id, university_id) VALUES ($1, $2) returning *;`;
        const params=[userID,universityID];
        const result=await db.query(query,params);
        return result;
    }
        
    

    
    
}



exports.userInfo=userInfo;