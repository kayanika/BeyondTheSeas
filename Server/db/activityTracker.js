const db=require('./index');


class activityTracker{
    constructor(){  
    }
    createActivity= async function(userID,activity_date,activitySummary,activityDescription) {
        const query = `INSERT INTO public.activity_manager(
         student_id, activity_date, event_summary, event_description)
            VALUES ( $1, $2, $3, $4) returning *;`;
        const params = [userID,activity_date,activitySummary,activityDescription];
        const result = await db.query(query, params);
        return result;
    }
   
    

    
}

exports.activityTracker=activityTracker; //export the class academicAnalysis