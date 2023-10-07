import {useState} from "react"
import { useNavigate } from "react-router-dom";
import "./index.css"

const SignupForm = () => {

    // Creating Required States using Hooks 
    const [firstName,setFirstName] = useState("");
    const [firstNameErrorMsg,setFirstNameErrorMsg] = useState("");

    const [lastName, setLastname] = useState("");
    const [lastNameErrorMsg, setLastNameErrorMsg] = useState("");

    const [mobileNumber, setMobileNumber] = useState("");
    const [mobileNnumberErrorMsg, setMobileNumberErrorMsg] = useState("");

    const [email, setEmail] = useState("");
    const [emailErrorMsg, setEmailErroMsg] = useState("")

    const [password, setPassword] = useState("");
    const [passwordErrorMsg, setPasswordErrorMsg] = useState("");

    const [submitErrorMessage,setSubmitErrorMessage] = useState("");
    const [submitSuccessMessage, setSubmitSuccessMessage] = useState("");

    const navigate = useNavigate();

    // what Happens on Submit Form 
    const onSubmitSignupForm = async (event) => {
        event.preventDefault();
        console.log("signup Triggered");
    
        const signupApiUrl = "https://quasar-colossal-wing.glitch.me/api/auth/signup";
    
        const userSignupData = {
            firstName,
            lastName,
            mobileNumber: mobileNumber.toString(),
            email,
            password
        }
    
        const signupOptions = {
            mode: "cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userSignupData),
        }
    
        try {
            const signupResponse = await fetch(signupApiUrl, signupOptions);
            console.log(signupResponse);
    
            if (signupResponse.ok) {
                setSubmitErrorMessage("");
                const signupJson = await signupResponse.json();
                const { message } = signupJson;
                const reqMsg = `${message}. You can Login now.`;
                setSubmitSuccessMessage(reqMsg);
            } else {
                setSubmitSuccessMessage("");
                const signupJson = await signupResponse.json();
                const { message } = signupJson;
                setSubmitErrorMessage(message);
            }
        } catch (error) {
            console.error("An error occurred during signup:", error);
            setSubmitErrorMessage(`An error occurred: ${error.message}`);
        }
    }
    

    //onBlur events 
    const  onBlurFirstName = (event) => {
        // console.log("blur first name")
        const enteredFirstName = event.target.value
        // console.log(event.target.value)
        if (enteredFirstName.length < 5){
            setFirstNameErrorMsg("*First name should be minimum 5 characters")
        }
        else{
            const isValidInput = /^[A-Za-z\s]+$/.test(enteredFirstName);
            if (!isValidInput) {
                setFirstNameErrorMsg("*only Alphabets please")
            }
            else{
                setFirstNameErrorMsg("");
            }
        }
    }

    const onBlurLastName = (event) => {
        const enteredLastName = event.target.value
        // console.log(event.target.value)
        const isValidInput = /^[A-Za-z]+$/.test(enteredLastName);
        if (!isValidInput) {
            setLastNameErrorMsg("*only Alphabets please")
        }
        else{
            setLastNameErrorMsg("");
        } 
    }

    const onblurMobileNumber = (event) => {
        const enteredMobileNumber = event.target.value;

        if(enteredMobileNumber.toString().length === 10) {
            const isValidInput = /^[0-9]+$/.test(enteredMobileNumber);
            if (isValidInput) {
                setMobileNumberErrorMsg("");
            }
            else{
                setMobileNumberErrorMsg("*Only Numbers Please")
            }
        }
        else{
            setMobileNumberErrorMsg("*Only 10 digits please")
        }
    }

    const onBlurEmail = (event) => {
        const enteredEmail = event.target.value 
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isEmailValid = emailPattern.test(enteredEmail);
        if (isEmailValid) {
            setEmailErroMsg("");
        }
        else{
            setEmailErroMsg("*Please Enter a Valid Email");
        }
    }

    const onBlurPassword = (event) => {
        const enteredPassword = event.target.value;

        const hasUpperCase = /[A-Z]/.test(enteredPassword);
        const hasLowerCase = /[a-z]/.test(enteredPassword);
        const hasNumber = /[0-9]/.test(enteredPassword);
        const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(enteredPassword);
        const hasLength = enteredPassword.length >= 5;

        if (hasLength && hasLowerCase && hasUpperCase && hasSpecialChar && hasNumber) {
            setPasswordErrorMsg("");
        }

        else{
            setPasswordErrorMsg("*password should have an UpperCase, a LowerCase, a Number, a SpecialCharacter and minimum length 5");
        }
    }

    // onChange Events 

    const onChangeFirstName = (event) => {
        // console.log("change first name");
        const enteredName = event.target.value;
        setFirstName(enteredName)
        
    } 

    const onChangeLastName = (event) => {
        setLastname(event.target.value)
    }

    const onChangeMobileNumber = (event) =>{
        setMobileNumber(event.target.value);
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    // onClickSignupLogin 
    const onClickSignupLogin = () => {
        navigate("/login")
    }


    const signupForm = () => {
        return(
            <form className="signup-form" onSubmit={onSubmitSignupForm} >
                <div className="signup-input-el-container" >
                    <label className="signup-label-el" htmlFor="firstname"> First Name : </label>
                    <input onBlur={onBlurFirstName} onChange={onChangeFirstName} 
                    type="input"  className="signup-input-el"  id="firstname"
                    placeholder="Enter your First Name"  required   />
                </div>
                <p className="signup-error-msg" > {firstNameErrorMsg}  </p>

                <div className="signup-input-el-container" >
                    <label className="signup-label-el" htmlFor="lastname"> Last Name : </label>
                    <input onBlur={onBlurLastName} onChange={onChangeLastName} 
                    type="input"  className="signup-input-el"  id="lastname"
                    placeholder="Enter your Last Name"  required   />
                </div>
                <p className="signup-error-msg" > {lastNameErrorMsg}  </p>
                
                <div className="signup-input-el-container" >
                    <label className="signup-label-el" htmlFor="mobilenumber"> Mobile Number  : </label>
                    <input onBlur={onblurMobileNumber} onChange={onChangeMobileNumber} 
                    type="tel"  className="signup-input-el"  id="mobilenumber"
                    placeholder="Enter your Mobile Number"  required   />
                </div>
                <p className="signup-error-msg" > {mobileNnumberErrorMsg}  </p>

                <div className="signup-input-el-container" >
                    <label className="signup-label-el" htmlFor="email"> Email  : </label>
                    <input onBlur={onBlurEmail} onChange={onChangeEmail} 
                    type="email"  className="signup-input-el"  id="email"
                    placeholder="Enter your Email"  required   />
                </div>
                <p className="signup-error-msg" > {emailErrorMsg}  </p>

                <div className="signup-input-el-container" >
                    <label className="signup-label-el" htmlFor="password"> Password  : </label>
                    <input onBlur={onBlurPassword} onChange={onChangePassword} 
                    type="password"  className="signup-input-el"  id="password"
                    placeholder="Enter your Password"  required   />
                </div>
                <p className="signup-error-msg" > {passwordErrorMsg}  </p>

                <button className="signup-button" type = "submit" > Signup  </button> 

                <p className="signup-error-msg" > {submitErrorMessage} </p>

                <p className="signup-success-msg" > {submitSuccessMessage} </p>

                <p className="login-signup" onClick = {onClickSignupLogin} > Alredy Registered. Do you Want to Signin ?  </p>

            </form>
        )
    }

    return(
        <div className="signup-page" >
            <h1 className="signup-head" > Spotlet </h1>
            {signupForm()}
        </div>
    )
}

export default SignupForm