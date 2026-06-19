import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Effect = () => {
  const [count,setCount] = useState(0);
  const [like,setLike] = useState(0)
  const [users,setUsers] = useState([])
  useEffect(()=>{
    console.log("Component Rendered")
  })
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>setUsers(data))
  },[])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Inc</button>
      <h1>{like}</h1>
      <button onClick={()=>setLike(like+1)}>Inc</button>
      <ul>
        {users.map((user)=>(
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Effect