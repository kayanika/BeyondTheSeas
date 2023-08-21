const express=require('express');

const profileController=require('../controller/profile');
const router=require('express-promise-router')();



router.route('/:userID').get(profileController.getProfile);
router.route('/:userID/shortlist/:universityID').post(profileController.shortlist);
router.route('/:userID/shortlist').get(profileController.getShortlist);

module.exports=router;