import { useState } from "react";

export default function CounterApp(){
    const [count, setCount]= useState(0);
    
    const handleIncrement = () => {
        console.log("pressed:",count)
        setCount(
            count +1
        )
        console.log("increased:",count)
    }
    return (
        <div className= "counter">
        <h1>Counter Application</h1>
        <p>Count Value:{count} </p>
        <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}