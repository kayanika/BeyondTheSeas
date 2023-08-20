const forumInfo = require('../db/forumInfo').forumInfo;
const {Client: ElasticSearchClient}=require('@elastic/elasticsearch');
const stopword=require('stopword');
const bodyParser = require('body-parser');

const esClient=new ElasticSearchClient({node:'http://localhost:9200'});
const stopwords=stopword.en;

const forum=new forumInfo();
async function indexQuestionsInElasticsearch(questions) {
    const indexName = 'questions'; // Replace with your Elasticsearch index name
    console.log("inside indexQuestionsInElasticsearch");
  
    try {
      // Create the Elasticsearch index if it doesn't exist
      await esClient.indices.create({
        index: indexName,
        body: {
          mappings: {
            properties: {
              question_id: { type: 'integer' },
              question_text: { type: 'text' },
              // Add more properties as needed
            },
          },
        },
      });
  
      // Index each question
      for (const question of questions) {
        await esClient.index({
          index: indexName,
          body: question,
        });
      }
  
      console.log('Questions indexed successfully.');
    } catch (error) {
      console.error('Error indexing data into Elasticsearch:', error);
      throw error;
    }
  }
  
  async function searchQuestionsInElasticsearch(searchTopic) {
    const keywords = stopword.removeStopwords(searchTopic.toLowerCase().split(' '), stopwords);
  
    try {
      const { body } = await esClient.search({
        index: 'questions',
        body: {
          query: {
            terms: {
              question_text: keywords,
            },
          },
        },
      });
  
      const results = body.hits.hits.map(hit => ({
        question_id: hit._source.question_id,
        question_text: hit._source.question_text,
      }));
  
      return results;
    } catch (error) {
      console.error('Error searching questions in Elasticsearch:', error);
      throw error;
    }
  }

exports.postQuestion= async (req,res,next)=>{
    try{
        console.log("inside postQuestion");
        console.log("req.params.id",req.params.userID);
        console.log("req.body.keywords",req.body.keywords);
        console.log("req.body.question",req.body.question_text);
        const result=await forum.postQuestion(req.params.userID,req.body.keywords,req.body.question_text);
        
        console.log("got the result back from database");
        console.log(result);
        res.status(201).json({
            status:"success",
            data:{
                question :result.rows
            }
        })
    }

    catch(err){
        console.log(err);
    }
}


exports.postAnswer= async (req,res,next)=>{
    try{
        console.log("inside postAnswer");
        const result=await forum.postAnswer(req.params.userID,req.params.questionID,req.body.answer);
        console.log("got the result back from database");
        console.log(result);
        res.status(201).json({
            status:"success",
            data:{
                user:result.rows
            }
        })
    }
catch(err)
{   console.log(err);

}
}
exports.getForum= async (req,res,next)=>{

    try{
        console.log("inside getForum controller");
        const result=await forum.getQuestions(req.params.userID);
        console.log("got the result back from database");
        console.log(result);
        res.status(201).json({
            status:"success",
            data:{
                user:result.rows
            }
        })
    }
catch(err)
{   console.log(err);

}
}
exports.getOneQUestion= async (req,res,next)=>{
    try{
        console.log("inside getOneQUestion controller");
        const result=await forum.getOneQUestion(req.params.questionID);
        console.log("got the result back from database");
        console.log(result);
        res.status(201).json({
            status:"success",
            data:{
                user:result.rows
            }
        })
    }
catch(err)
{   console.log(err);

}
}


exports.searchTopic= async (req,res,next)=>{
  
    // try {
    //     const questions = await forum.getQuestions();
    //     await indexQuestionsInElasticsearch(questions);
    
    //     const searchTopic = 'University review'; // Replace with your search topic
    //     const searchResults = await searchQuestionsInElasticsearch(searchTopic);
    //     console.log('Search results:', searchResults);
    //     res.status(201).json({
    //         status:"success",
    //         data:{
    //             user:searchResults.rows
    //         }
    //     })
    //   } catch (error) {
    //     console.error('An error occurred:', error);
    //   } 
    try{
        console.log("inside searchTopic controller");
        const  searchTopic =req.body.searchTopic;
        console.log("searchTopic",searchTopic);
        const keywords= stopword.removeStopwords(searchTopic.toLowerCase().split(' '),stopwords);
        const result=await forum.searchTopic(keywords);
        console.log("got the result back from database");
        console.log(result);
        res.status(201).json({
            status:"success",
            data:{
                user:result.rows
            }
        })
    }
catch(err)
{   console.log(err);

}
}