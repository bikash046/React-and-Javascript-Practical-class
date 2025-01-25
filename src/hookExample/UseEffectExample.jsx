import {useEffect, useState} from "react"
export default function UseEffectExample() {
const [timer, setInterval] = useState()

//here no dependency id used, thats why it is calling forever
    useEffect(
        () => {
            setInterval(()=>{
                (prev) => prev+1;
            })
        }, [1000]
    )

    //using empty array in dependency means it is only called for the first time or only in first render
    // useEffect(
    //     () => {
    //         setTimer ((prev)=>prev +1)
    //     }, []
    // )
// // if state variable is provided inside dependency array then call back is called whenever the state variable is changed
// useEffect(
//     () => {
//         setTimer ((prev)=>prev +1)
//     }, [timer, count])
    return (
        <>
        <h1>UseEffect Example</h1>
        <p>Timer : {timer} Sec</p>
        </>
    )
}