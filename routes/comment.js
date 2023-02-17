const express=require('express');
const router=express.Router();
const passport=require('passport');
const comment_controller=require('../controllers/comment_controller')

router.post('/add-comment',passport.checkauthentication, comment_controller.create);

router.get('/delete/:id',passport.checkauthentication,comment_controller.destroy);
module.exports=router;