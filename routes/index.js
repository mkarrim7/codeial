const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');
const userController=require('../controllers/user_controller');
router.get('/',userController.loginPage);

router.get('/home',homeController.home);
router.use('/users',require('./users'));

console.log("router is working");
module.exports=router;