const express=require('express');
const router=express.Router();
const passport=require('passport');
const userController=require('../controllers/user_controller');
console.log("<------ USERS ROUTER IS WORKING ----->")
router.get('/signIn',userController.loginPage);
router.get('/profile',userController.profile);
router.get('/signUp',userController.signup);
router.post('/create',userController.create);
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'users/signIn'}
    ),userController.createSession);
module.exports=router;