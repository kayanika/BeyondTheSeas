const expres=require('express');

const router=require('express-promise-router')();


const formController=require('../controller/forum');

router.route('/:userID/postQuestion').post(formController.postQuestion);
router.route('/:userID/postAnswer/:questionID').post(formController.postAnswer);
router.route('/:userID/searchTopic').post(formController.searchTopic);
router.route('/:userID/getQuestion/:questionID').get(formController.getOneQUestion);
router.route('/:userID').get(formController.getForum);
//router.route('/:userID/getAllQuestions').get(formController.getAllQuestions);

//post a question

// answer a question

//get all question on a specific topic

//search a specific topic
module.exports=router;