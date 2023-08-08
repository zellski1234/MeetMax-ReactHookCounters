import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }
  return (
    <div>
        Count: {count}
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        
        <button onClick={()=>setCount(prevCount => prevCount + 1)}>increment</button>
        <button onClick={()=>setCount(count + 1)}>increment</button>

        <button onClick={()=>setCount(prevCount => prevCount - 1)}>Decrement</button>
        <button onClick={incrementFive}>increment 5 v1</button>


        <button onClick={()=>setCount(count + 5)}>increment 5 v2</button>

    </div>
  )
}

export default HookCounterTwo