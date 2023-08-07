const express=require('express');

const PersonalizedController=require('../controller/personalized');

const router=require('express-promise-router')();



//router.route('/').get(PersonalizedController.getPersonalized);
router.route('/:userID/probable').get(PersonalizedController.getProbable);
router.route('/:userID/safe').get(PersonalizedController.getSafe);
router.route('/:userID/ambitious').get(PersonalizedController.getAmbitious);

module.exports=router;
