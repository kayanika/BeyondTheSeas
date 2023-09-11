const express=require('express');

const profileController=require('../controller/profile');
const router=require('express-promise-router')();



router.route('/:userID').get(profileController.getProfile);
router.route('/:userID/shortlist').post(profileController.shortlist);
router.route('/:userID/shortlist').get(profileController.getShortlist);

router.route('/:userID/blacklist').post(profileController.blacklist);

router.route('/:userID/Deadlines').get(profileController.getDeadlines);

module.exports=router;