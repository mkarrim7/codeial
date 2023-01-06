const express=require('express');
const router=express.Router();
const passport=require('passport');
const comment_controller=require('../controllers/comment_controller')

router.post('/add-post',passport.checkauthentication, comment_controller.create);

module.exports=router;