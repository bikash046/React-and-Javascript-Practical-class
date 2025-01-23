import { useState } from "react"
import "./LoginPage.css" 
const LoginPage = () =>  {
    const [formState, setFormState] = useState({})
    const handleFormOnChange=(e) => {
        const {value,name} = e.target
        // const v = e.target.value;
        // const n = e.target.name;
        const mergedObj = {
            ...formState,
            [name]: value
        } 
        setFormState(mergedObj)
        console.log("new updated form state:",mergedObj)
    }

    return (
        <div className="login-card">
        <h1>Login</h1>
        <form>
            <div className="Login-field">
                <label >
                    Username:
                    <input type="text" name="username" 
                    className="username" onChange={handleFormOnChange} value={formState.username} />
                </label>
            </div>
            <div className="Login-field">
                <label >
                    Email:
                    <input type="email" name="Enter your valid email" className="email"onChange={handleFormOnChange} value={formState.email} />
                </label>
            </div>
            <div className="Login-field">
                <label >
                    Password:
                    <input type="password" name="Enter Strong password" className="password" onChange={handleFormOnChange} value={formState.password}/>
                </label>
            </div>
            <div className="Login-field">
                <label >
                    Birthdate:
                    <input type="date" placeholder="your birthdate" className="birthdate" onChange={handleFormOnChange} value={formState.birthdate} />
                </label>
            </div>
            <div className="Login-field">
                <label >
                    Pick your favourite colour:
                    <input type="color" placeholder="your fav color" className="color" onChange={handleFormOnChange} />
                </label>
            </div>
            <div className="Login-button">
                <label >
                    <input type="submit" value={"Login"} required />
                </label>
            </div>
        </form>
        </div>

    )
}
export default LoginPage