const User=require('../../../models/userdetails');
const jwt=require('jsonwebtoken');

module.exports.createSession=async function(req,res){
    try {
        let user =await User.findOne({email:req.body.email});
        if(!user || user.password!=req.body.password){
            return res.json(422,{
                message:"Invalid Username or Password"
            })
        }
        return res.json(200,{
            message:"Sign in successful,here is your token Please keep it safe",
            data:{
                token:jwt.sign(user.toJSON(),'codeial',{expiresIn:"24h"})
            }
        })

    } catch (error) {
        console.log("*******",error);
        return res.json(500,{
            message:"Internal Server Error"
        })
        
    }

}