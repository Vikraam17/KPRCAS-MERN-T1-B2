const express = require("express")
const connectDB = require("./config/db")
const todo = require('./model/todo')
const app = express();
connectDB();


app.get('/',async(req,res)=>{
    try{
        const todos = await todo.find();
        res.json(todos);
    }catch(err){
        res.json(err);
    }
})


app.post('/',(req,res)=>{
    res.send("Post Route is Working!!")
})
app.put('/',(req,res)=>{
    res.send("Put Route is Working!!")
})
app.delete('/',(req,res)=>{
    res.send("Delete Route is Working!!")
})

app.listen(3000,()=>{
    console.log(`Server running on Port http://localhost:3000`)
})