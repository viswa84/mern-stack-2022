const { default: mongoose, Schema } = require("mongoose");



const transactionScema = new Schema({
    amount:Number,
    description:String,
    date:{type:Date , default: new Date()},
    createdAt:{type:Date , default:Date.now} 

})


 const  Transaction =    mongoose.model("Transaction", transactionScema);
module.exports=Transaction