const expres=require('express');

const router=require('express-promise-router')();


const activityController=require('../controller/activityManager');

router.route('/:userID/createEvent').post(activityController.createEvent);


//get all question on a specific topic

//search a specific topic
module.exports=router;