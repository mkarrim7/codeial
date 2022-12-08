const express=require('express');
const router=express.Router();
const demoController=require('../controllers/demo_contoller');
router.get('/demo',demoController.demo);
module.exports=router;