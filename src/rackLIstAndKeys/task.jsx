/* eslint-disable no-unused-vars */
import { useState } from "react";


export default function Task(){
    const [tasks, setTasks] = useState(["Task1", "Task2"])
    const [inputtedTask, setInputtedTask] = useState("")

    const handleAddTask = (e) => {
        e.preventDefault()
        console.log("inputted task - " , inputtedTask)
        if(inputtedTask.length<= 0){
            alert("Please enter task")
            return;
        }
        //todo: also validate for the duplicated tasks
        //create anew array and merged previous task array using spread operator and added new task
        setTasks([...tasks,inputtedTask])
        alert("successfully added tasks")
    }
    const handleDeleteTask = (data) => {
        //filtering the element form taks array which is not equal to the data
       const resultTasks = tasks.filter(
        (task) => task !== data
       )
       console.log("result after deleting task:", resultTasks)
       //updating the state with the resultant array
       setTasks(resultTasks)
    }

    return (
        <>
        <h1>All Task </h1>
        <ul type="circle">
            {
                tasks && tasks.map(
                    (task,index)=>{
                        return(
                        
                            <div key={index} style={{display:"flex", justifyContent: "space-between", margin:"50px"}}>
                            <li > {task}</li>
                            <button onClick={
                                ()=> handleDeleteTask(task)
                            }>Delete</button>
                            </div>
                            
                        )
                    }
                )
            }
        </ul>
        <div>
            <form onSubmit={handleAddTask}>
                <input type="text" placeholder="Enter Task" value={inputtedTask}
                 onChange={(e)=>setInputtedTask(e.target.value)}/>
                <button type="submit">Add Task</button>
            </form>
        </div>
        </>
    )
}