import {useState} from "react"
import "./index.css"

const SignupForm = () => {
    const [firstName,setFirstName] = useState("");
    const [lastName, setLastname] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const signupForm = () => {
        return(
            <form className="signup-form" >
                <div className="input-el-container" >
                    <label> First Name </label>
                    <input type="input"  className="input-el" placeholder="Enter your First Name"  required   />
                </div>
            </form>
        )
    }

    return(
        signupForm()
    )
}

export default SignupForm