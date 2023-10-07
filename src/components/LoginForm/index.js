import {useState} from "react"
import "./index.css"


const LoginForm = () => {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    // On Submitting Login What Happens
    const onSubmitLogin =  async(event) => {
        event.preventDefault();
        console.log("Login Triggered")

        const userInfo = {
            userEmail,
            userPassword
        }

        const loginUrl = "https://quasar-colossal-wing.glitch.me/api/auth/login"
        const loginOptions = {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(userInfo),

        }

        const response = await fetch(loginUrl,loginOptions);
        console.log(response);
        
    
    }

    // onBlurEvents
    const onBlurEmail = (event) => {
        // console.log("email blur triggered")
        if (userEmail === ""){
            setErrorMessage("*Email should not be empty");
        }
        else{
            setErrorMessage("")
        }
    }

    const onBlurPassword = (event) => {
        // console.log("password Blur Triggered")
        if (userPassword === "") {
            setErrorMessage("*Please Enter your Password")
        }
        else{
            setErrorMessage("")
        }
    }

    // OnChange Events 

    const onChangeEmail = (event) => {
        // console.log("onChange Email Triggered")
        setUserEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        // console.log("onChange Password Triggered")
        setUserPassword(event.target.value)
    }

    const loginForm = () => {
        return(
            <form className="login-form" onSubmit = {onSubmitLogin} >
                <div className="login-input-el-container" >
                    <label htmlFor="login-email" className="login-label-el" > Email : </label>
                    <input id="login-email" onBlur={onBlurEmail} onChange={onChangeEmail} value={userEmail} type="email"  className="login-input-el" placeholder="Enter your Registered Email"  required />
                </div>

                <div className="login-input-el-container" >
                    <label htmlFor="login-password" className="login-label-el" > Password : </label>
                    <input id = "login-password" onBlur={onBlurPassword} onChange={onChangePassword} value={userPassword} type="password"  className="login-input-el" placeholder="Enter your Password"  required />
                </div>

                <div> 
                    <button  className="login-button" type = "submit" > Login </button>
                </div>
                <p className="error-msg" > {errorMessage} </p>
            </form> 
        )
    }

    return (
        <div className="login-page" >
            <h1 className="login-head" > Spotlet </h1>
            {loginForm()}
        </div>
    )
}

export default LoginForm