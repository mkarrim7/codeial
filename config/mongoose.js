const mongoose=require('mongoose');
async function main(){
    await mongoose.connect('mongodb://localhost:27017/codeial_development');
        console.log('connection successfull !!');
}
main().catch((error)=>{console.log("connection not successfull !!");});