const db=require('./index');


class academicAnalysis{
    constructor(){  
    }

    getAcademicAnalysis= async function() {
        const query = "";
        const params = [];
        
        const result = await db.query(query,params);
        return result;
    }

    getProbable= async function(userID) {
        const query = `WITH StudentData AS (
            SELECT
                s.student_id,
                s.cgpa,
                s.gre_score,
                s.maximum_tuition_fees,
                s.in_need_of_scholarship,
                ARRAY_AGG(DISTINCT sf.field_id) AS student_fields
            FROM student s
            LEFT JOIN studentFieldOfInterest sf ON s.student_id = sf.student_id
            WHERE s.student_id = $1 -- Replace with the specific student's ID
            GROUP BY s.student_id
        )
        
        SELECT
            u.university_id,
            u.name,
            u.cs_ranking,
            p.program_type,
            p.tuition_fees,
            
            
            COUNT(DISTINCT cbfi.course_id) AS matched_courses
        FROM university u
        JOIN universityRunsProgram up ON u.university_id = up.university_id
        JOIN programCourseMapping pcm ON up.program_id = pcm.program_id
        JOIN program p on p.program_id = up.program_id
        JOIN courseidBelongingToFieldOfInterest cbfi ON pcm.course_id = cbfi.course_id
        JOIN StudentData sd ON cbfi.field_id = ANY(sd.student_fields)
        WHERE
            (up.tuition_fees - sd.maximum_tuition_fees <1000  OR
             (sd.in_need_of_scholarship = TRUE AND  up.available_scholarship  = TRUE))
            AND u.cutoff_cgpa - sd.cgpa <=.1 
            AND u.cutoff_grescore - sd.gre_score <=20
        GROUP BY u.university_id, u.name, u.cs_ranking,	p.program_type,p.tuition_fees
        ORDER BY matched_courses DESC;`;
        const params = [userID];
        const result = await db.query(query, params);
        return result;
    }
    getSafe= async function(userID) { 
        console.log("inside getSafe in db");
        console.log(userID);
        const query = `WITH StudentData AS (
            SELECT
                s.student_id,
                s.cgpa,
                s.gre_score,
                s.maximum_tuition_fees,
                s.in_need_of_scholarship,
                ARRAY_AGG(DISTINCT sf.field_id) AS student_fields
            FROM student s
            LEFT JOIN studentFieldOfInterest sf ON s.student_id = sf.student_id
            WHERE s.student_id = $1 -- Replace with the specific student's ID
            GROUP BY s.student_id
        )
        
        SELECT
        u.university_id,
        u.name,
        u.cs_ranking,
        p.program_type,
        p.tuition_fees,
            COUNT(DISTINCT cbfi.course_id) AS matched_courses
        FROM university u
        JOIN universityRunsProgram up ON u.university_id = up.university_id
        JOIN programCourseMapping pcm ON up.program_id = pcm.program_id
        JOIN program p on p.program_id = pcm.program_id
        JOIN courseidBelongingToFieldOfInterest cbfi ON pcm.course_id = cbfi.course_id
        JOIN StudentData sd ON cbfi.field_id = ANY(sd.student_fields)
        WHERE
            (p.tuition_fees<= sd.maximum_tuition_fees  OR
             (sd.in_need_of_scholarship = TRUE AND  p.scholarship_available  = TRUE))
            AND u.cutoff_cgpa <=sd.cgpa 
            AND u.cutoff_grescore <= sd.gre_score
            GROUP BY u.university_id, u.name, u.cs_ranking,	p.program_type,p.tuition_fees
        ORDER BY matched_courses DESC;
        
        `;
        const params = [userID];
        const result = await db.query(query, params);
        return result;
    }
    getAmbitious= async function(userID) {
        const query = `WITH StudentData AS (
            SELECT
                s.student_id,
                s.cgpa,
                s.gre_score,
                s.maximum_tuition_fees,
                s.in_need_of_scholarship,
                ARRAY_AGG(DISTINCT sf.field_id) AS student_fields
            FROM student s
            LEFT JOIN studentFieldOfInterest sf ON s.student_id = sf.student_id
            WHERE s.student_id = $1 -- Replace with the specific student's ID
            GROUP BY s.student_id
        )
        
        SELECT
        u.university_id,
        u.name,
        u.cs_ranking,
        p.program_type,
        p.tuition_fees,
            COUNT(DISTINCT cbfi.course_id) AS matched_courses
        FROM university u
        JOIN universityRunsProgram up ON u.university_id = up.university_id
        JOIN programCourseMapping pcm ON up.program_id = pcm.program_id
        JOIN program p on p.program_id = up.program_id
        JOIN courseidBelongingToFieldOfInterest cbfi ON pcm.course_id = cbfi.course_id
        JOIN StudentData sd ON cbfi.field_id = ANY(sd.student_fields)
        WHERE
            
             u.cutoff_cgpa - sd.cgpa <= .2 
            AND u.cutoff_grescore - sd.gre_score <= 50
            AND up.program_rating > 4.5
            GROUP BY u.university_id, u.name, u.cs_ranking,	p.program_type,p.tuition_fees
        ORDER BY matched_courses DESC;`;
        const params = [userID];
        
        const result = await db.query(query, params);
        return result;
    }
    

    getNonPersonalized= async function() {
        const query = "SELECT university_id, name, cs_ranking, website_link, location FROM public.university order by cs_ranking ASC ;";
        const params = [];
        const result = await db.query(query, params);
        return result;
    }
    getNonPersonalizedFilteredTuitionFees= async function() {
        const query = "SELECT u.university_id, u.name, u.cs_ranking, MIN(p.tuition_fees) AS lowest_tuition_fee FROM university u JOIN universityRunsProgram up ON u.university_id = up.university_id JOIN program p ON up.program_id = p.program_id GROUP BY u.university_id, u.name, u.cs_ranking ORDER BY lowest_tuition_fee ASC;";
        const params = [];
        const result = await db.query(query, params);
        return result;
    }
    getNonPersonalizedFilteredScholarship = async function() {
        const query = "SELECT u.university_id, u.name, u.cs_ranking, COUNT(p.scholarship_available) AS scholarship_count FROM university u JOIN universityrunsprogram up ON u.university_id = up.university_id JOIN program p ON up.program_id = p.program_id WHERE p.scholarship_available = TRUE GROUP BY u.university_id, u.name, u.cs_ranking ORDER BY scholarship_count DESC;";
        const params = [];
        const result = await db.query(query, params);
        return result;
    }
    

    
}

exports.academicAnalysis=academicAnalysis;   //export the class academicAnalysis