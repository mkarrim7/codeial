const express=require('express');
const router=express.Router();
const passport=require('passport');
const post_controller=require('../controllers/post_controller')

router.post('/add-post',passport.checkauthentication,post_controller.createPost);

module.exports=router;