const mongoose = require("mongoose");

const connectDB = async()=>{
     try{
        await mongoose.connect("mongodb+srv://vikraam1704:vikraam@kprcasb2.d1vscde.mongodb.net/todo");
        console.log("MongoDB connected SUccessfully🎉");
     }catch(err){
        console.error(err);
     }}
module.exports = connectDB;