const expres=require('express');

const router=require('express-promise-router')();


const formController=require('../controller/forum');
router.route('/:userID/postQuestion').post(formController.postQuestion);
router.route('/:userID/postAnswer').post(formController.postAnswer);
router.route('/:userID/searchTopic').get(formController.searchTopic);
router.route('/:userID/getAllQuestions').get(formController.getAllQuestions);

//post a question

// answer a question

//get all question on a specific topic

//search a specific topic
