const db= require('./index');

class forumInfo{
    constructor(){  
    }
    getQuestions= async function() {
        const query = "SELECT q.question_id, q.question_text,q.student_id,s.username FROM questions q INNER JOIN student s ON q.student_id = s.student_id ;";
        const params = [];
        const result = await db.query(query, params);
        return result;
    }
    getAllQuestions= async function() {
        const query = "SELECT q.question_id, q.question_text,q.student_id,s.username FROM questions q INNER JOIN student s ON q.student_id = s.student_id ;";
        const params = [];
        const result = await db.query(query, params);
        return result;
    }


    searchTopic= async function(keywords) {
        try{
        console.log("inside searchTopic in database");
        console.log(keywords);
        const query = `
   
SELECT q.question_id,q.question_text, a.answer_text,s.username as answerer, p.username as questioner
        FROM questions q
        LEFT JOIN answers a ON q.question_id = a.question_id
        INNER JOIN student s ON a.student_id = s.student_id
        INNER JOIN student p ON q.student_id = p.student_id
        
        WHERE (
            SELECT COUNT(DISTINCT keyword)
            FROM unnest(q.keywords) k
            CROSS JOIN unnest(string_to_array(k, ' ')) keyword
            WHERE Lower(keyword) = ANY($1::text[])
        ) > 0
        GROUP BY q.question_id,q.question_text, a.answer_text , s.username , p.username
        ORDER BY (
            SELECT COUNT(DISTINCT keyword)
            FROM unnest(q.keywords) k
            CROSS JOIN unnest(string_to_array(k, ' ')) keyword
            WHERE Lower(keyword) = ANY($1::text[])
        ) DESC;



        
      `;
    
        const params = [keywords];
        const result = await db.query(query, params );
        console.log(result);
        return result;}
        catch(err){
            console.log(err);
        }


}
    postQuestion= async function(userID,keywords,question) {
        console.log("inside postQuestion in database");
        console.log(userID);
        console.log(question);
        console.log(keywords);
        

        const query = "INSERT INTO questions(student_id, keywords, question_text) VALUES ($1, string_to_array($2, ','), $3) RETURNING *;";
        const params = [userID,keywords,question];
        const result = await db.query(query, params);

        console.log(result.rows[0].keywords);
        console.log(typeof(result.rows[0].keywords));  
        return result;
    }
    postAnswer= async function(userID,questionID,answer) {
        console.log("inside postAnswer in database");
        console.log(userID);
        console.log(questionID);
        const query = "INSERT INTO answers( question_id, student_id, answer_text) VALUES($1,$2,$3) returning * ";
        const params = [questionID,userID,answer];
        const result = await db.query(query, params);
        return result;
    }

    
    editAnswer= async function(userID, questionID, answerID,answer) {
        console.log("inside editAnswer in database");
        const query = "UPDATE answers SET answer_text=$1 WHERE answer_id=$2 AND question_id=$3 AND student_id=$4 returning * ";
        const params = [answer,answerID,questionID,userID];
        const result = await db.query(query, params);
        return result;
    }

    deleteAnswer= async function(userID, questionID, answerID) {
        console.log("inside deleteAnswer in database");
        const query = "DELETE FROM answers WHERE answer_id=$1 AND question_id=$2 AND student_id=$3 returning * ";
        const params = [answerID,questionID,userID];
        const result = await db.query(query, params);
        return result;
    }

    getAnswers= async function(questionID) {
        console.log("inside getAnswers in database");
        console.log(questionID);
        const query = "SELECT a.answer_id, a.answer_text,a.student_id, s.username  FROM answers a INNER JOIN student s ON a.student_id = s.student_id WHERE question_id=$1";
        const params = [questionID];
        const result = await db.query(query, params);
        return result;
    }

    getOneQUestion= async function(questionID) {
        console.log("inside getOneQUestion in database");
        console.log(questionID);
        const query = `SELECT
        a.answer_id,
        a.student_id,
        a.answer_text,
        s.username
      FROM
        answers a
        INNER JOIN student s ON a.student_id = s.student_id
      WHERE
        a.question_id = $1
        ; `;
        const params = [questionID];
        const result = await db.query(query, params);
        return result;

    }


}

exports.forumInfo=forumInfo;   //export the class forumInfo