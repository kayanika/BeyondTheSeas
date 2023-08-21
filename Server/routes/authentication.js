const express=require('express');

const authController=require('../controller/authentication');

const router=require('express-promise-router')();

router.route('/register').post(authController.signup);
router.route('/login').post(authController.verifyLogin);
router.route('/form-academic-details/:userID').post(authController.addProfile);

 //router.route('/signup').get(authController.getSignup);
 //router.route('/login').get(authController.getLoginPage); //probably not needed
 //router.route('/login').post(authController.verifyLogin);
 //router.route('/logout').get(authController.getLogout); //probably not needed

module.exports=router;
