const express=require('express');

const authController=require('../controller/authentication');

const router=require('express-promise-router')();

router.route('/signup').post(authController.signup);
// router.route('/signup').get(authController.getSignup);
// router.route('/login').get(authController.getLogin);
// router.route('/login').post(authController.getLogin);
// router.route('/logout').get(authController.getLogout);

module.exports=router;
