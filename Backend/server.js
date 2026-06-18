const express = require("express")
const connectDB = require("./config/db")
const todo = require('./model/todo');
const app = express();
connectDB();
app.use(express.json())

app.get('/',async(req,res)=>{
    try{
        const todos = await todo.find();
        res.json(todos);
    }catch(err){
        res.json(err);
    }
})

app.post('/',async(req,res)=>{
    try{
        const task = await todo.create(req.body);
        res.status(201).json(task)
    }catch(err){
        res.status(500).json(err);
    }
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