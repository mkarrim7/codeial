const express=require('express');
const passport=require('passport');
const router=express.Router();
const homeController=require('../controllers/home_controller');

router.get('/',homeController.home);
router.use('/api',require('./api'))

console.log("router is working");
module.exports=router;