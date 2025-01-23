export default function EventExample(){
    const handleOnClick = (event) =>{
        console.log("event on click",event)
    }
        const handleOnChange = (event) => {
            console.log("event on change",event,EventTarget.value)
        }
        const handleKeyPressed = (event)=>{
            console.log("keyPressed:" ,event.key)
        }
        return (
            <>
            <button onClick ={handleOnClick}>Click</button>
            <input type="text" placeholder="Enteryou fullname" onChange={handleOnChange}
            onKeyDown={handleKeyPressed} />
            <MyForm></MyForm>
            <PropagationExample></PropagationExample>
            </>
        )
}

// html default form submitting problem
// solution preventDefault()
function MyForm() {
    // eslint-disable-next-line no-unused-vars
    const handleSubmit = (event) => {
        event.preventDefault() //prevent from html form submitting default behavior i.e. pare reloading
        console.log("form submitted")
    }
    return(
        <form>
            <input type="number" placeholder="Enter age" />
            <input type="text"  placeholder="Enter name"/>
            <input type="submit" />
        </form>
    )
}

// back propagation problem (bubble up DOM)
function PropagationExample() {
    const handleParentOnclick = ()=>{
        console.log("parent clicked")
    }
    const handleChildOnclick = (event)=>{
        event.stopPropagation() //prevent back progpagation:means event will not go to parent.
        console.log("child clicked")
    }

    return (
        <div style={
            {
                width:"200px",
                padding:"10px",
                backgroundColor:"blue",
            } }onClick={handleParentOnclick}>
            <button onClick={handleChildOnclick}> Refresh </button>
            
        </div>
    )
}