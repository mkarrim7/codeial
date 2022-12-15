const express=require('express');
const router=express.Router();
const userController=require('../controllers/user_controller');
console.log("<------ USERS ROUTER IS WORKING ----->")
router.get('/profile',userController.profile);
router.get('/signup_newuser',userController.signup);
router.post('/create',userController.create);
module.exports=router;