const express=require('express');

const PersonalizedController=require('../controller/personalized');

const router=require('express-promise-router')();



//router.route('/').get(PersonalizedController.getPersonalized);
router.route('/probable').get(PersonalizedController.getProbable);
router.route('/safe').get(PersonalizedController.getSafe);
router.route('/ambitious').get(PersonalizedController.getAmbitious);

module.exports=router;
