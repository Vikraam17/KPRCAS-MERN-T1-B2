const express = require("express")
const connectDB = require("./config/db")
const todo = require('./model/todo');
const cors = require('cors')
const app = express();
connectDB();
app.use(cors())
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

app.put('/:id', async(req,res)=>{
    try{
        const updatedTask = await todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(updatedTask)
    }catch(err){
        res.status(500).json(err);
    }
})


app.delete('/:id',async(req,res)=>{
    try{
        await todo.findByIdAndDelete(req.params.id)
        res.status(200).json({
            "message":"Task Deleted Successfully"
        })
    }catch(err){
        res.status(500).json(err);
    }
})

app.listen(3000,()=>{
    console.log(`Server running on Port http://localhost:3000`)
})