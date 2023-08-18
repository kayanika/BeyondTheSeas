const db= require('./index');

class forumInfo{
    constructor(){  
    }
    getQuestions= async function() {
        const query = "SELECT question_id, question_text FROM questions ;";
        const params = [];
        const result = await db.query(query, params);
        return result;
    }

    searchTopic= async function(keywords) {
        console.log("inside searchTopic in database");
        console.log(keywords);
        const query = `
        SELECT q.question_id,q.question_text, a.answer_text
        FROM questions q
        LEFT JOIN answers a ON q.question_id = a.question_id
        WHERE (
            SELECT COUNT(DISTINCT keyword)
            FROM unnest(q.keywords) k
            CROSS JOIN unnest(string_to_array(k, ' ')) keyword
            WHERE Lower(keyword) = ANY($1::text[])
        ) > 0
        GROUP BY q.question_id,q.question_text, a.answer_text
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
        return result;


}
    postQuestion= async function(userID,question) {
        console.log("inside postQuestion in database");
        console.log(userID);
        console.log(question);
        const query = "INSERT INTO questions(student_id, keywords, question_text) VALUES($1,$2) returning * ";
        const params = [userID,question];
        const result = await db.query(query, params);
        return result;
    }
    postAnswer= async function(userID,questionID,answer) {
        console.log("inside postAnswer in database");
        
}

exports.forumInfo=forumInfo;   //export the class forumInfo