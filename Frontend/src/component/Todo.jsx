import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
const Todo = () => {
    const [todos,setTodos] = useState([]);
    const [task,setTask] = useState("");
    const [edit,setEdit] = useState(null);
    const fetchTodo = async() =>{
        const res = await axios.get("http://localhost:3000/");
        setTodos(res.data);
    }
    useEffect(()=>{
        fetchTodo();
    },[])

    const handleAddOrEdit = async() =>{
        if(edit!==null){
            await axios.put(`http://localhost:3000/${edit}`,{task:task})
        }else{
            await axios.post("http://localhost:3000/",{task:task});
        }
        setTask("");
    }
    const handleEdit = (todo) =>{
        setTask(todo.task);
        setEdit(todo._id);
    }
    const handleDelete = async(id) =>{
        await axios.delete(`http://localhost:3000/${id}`);
        fetchTodo();
    }
    const handleToggle =async(todo) =>{
        await axios.put(`http://localhost:3000/${todo._id}`,
            {
                completed:!todo.completed
            })
        fetchTodo()
    }
  return (
    <div>
        <form>
            <label>Task : </label>
            <input type="text" 
            placeholder='Enter the Task'
            value={task}
            onChange={(e)=>setTask(e.target.value)}/>
            <button onClick={handleAddOrEdit}>{edit?"Update":"Add"}</button>
        </form>
        <ul>
            {todos.map((todo)=>(
                <li key={todo._id}>
                    <span 
                    style={{cursor:"pointer",
                        textDecoration:todo.completed?"line-through":"none"}}
                    onClick={()=>handleToggle(todo)}
                    >{todo.task}</span>
                    <button onClick={()=>handleEdit(todo)}>✏️</button>
                    <button onClick={()=>handleDelete(todo._id)}>🗑️</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo