import React, { useState } from 'react'

export default function ReactHooks2() {
    const [count1, setCount1] = useState(0);
     const handleIncrement = () =>{
        setCount1(count1 + 1);
    }
  return (
    <div>
        <h1>Count : {count1}</h1>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}
