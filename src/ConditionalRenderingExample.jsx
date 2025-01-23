/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState} from 'react';
export default function ConditionalRenderingExample(){
return  (
   <>
   <p>On Logged In </p>
   <LandingPage isLoggedIn={true}/>
   <p>On Logged Out </p>
   <LandingPage isLoggedIn={false}/>
   <CustomLoginButton isLoggedIn={true}/>
   <p>When logout</p>
   <CustomLoginButton/>
   <ShowUserName/>
   <p>After passing user Object </p>
   <ShowUserName user={
   {
       id:2,
       username:"John Doe",
       name:"John Doe",
   }
}/>
    <ToggleContent/>
    <ListActiveUsers/>
   </>
)
}
//usign array or lis (filter +map)
function ListActiveUsers(){
    const users = [
        {id:1, name:"Amit", isActive:true},
        {id:2, name:"Bikash", isActive:false},
        {id:3, name:"sumit", isActive:true},
    ]
    // const filterUsers = users.filter(
    //     (ele)=>ele.isActive
    // )
    // console.log("filtered User:",filterUsers)
    return(
        <>
        <h1>Active Users</h1>
       <ol type="a">
        {
             users && users.filter(
                (ele)=>ele.isActive
                .map(
                    (element, index) => (
                        <li>(element.name):{element.isActive? "Active":
                        "Inactive"}</li>
                    )
                )
            )
        }</ol>
        </>
    )
}

// using state or dymanic value
function ToggleContent(){
    const [isVisible, setIsVisible] = useState(false)
    return(
        <>
        <button onClick={
            ()=>setIsVisible(!isVisible)

        }> 
            {isVisible ? "hide" : "Show"}
            </button>
        {isVisible && <p>This is my Content</p>}
        </> 
        )
}

// using && or Short-Circuit Evaluation
function ShowUserName({user}){
    return (
        <>
        <h1>My UserName </h1>
       {(user && user.length > 0) || <p>No User Name Exits</p>}
       {user && <p>{user.name}</p>}
       </>
    )
}

//usign ternary operators
function CustomLoginButton({isLoggedIn}) {
    return(
        <>
        <h1>Using Ternary(? :) Operator</h1>{
            isLoggedIn? <button>Logged In</button> : <button>Logged Out</button>
        }
        </>
    )
}
//using if statements
function LandingPage({ isLoggedIn }){
    if(isLoggedIn){
        return <h1>Home Page!</h1>
    }else{
        return <h1>Login Page!</h1>
    }
}
