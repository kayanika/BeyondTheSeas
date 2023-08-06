const express=require('express');
const router=require('express-promise-router')();
const nonPersonalizedController=require('../controller/nonPersonalized');


router.route('/').get(nonPersonalizedController.getNonPersonalized);
//router.route('/filter').get(nonPersonalizedController.getNonPersonalized);
router.route('/:filterOption').get(nonPersonalizedController.getNonPersonalizedFiltered);


module.exports=router;
