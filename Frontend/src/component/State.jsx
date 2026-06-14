import React, { useState } from 'react'
const State = () => {
// variable [variableName, setter Function] = useState(initialValue)
    const [count,setCount] = useState(0);
  return (
    <div>
        <p>Count : {count}</p>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>
  )
}
export default State