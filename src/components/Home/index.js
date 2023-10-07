import { useEffect } from "react"
import {useNavigate} from "react-router-dom"
import Cookies from "js-cookie"
import "./index.css"

const Home = () => {
    
    const navigate = useNavigate();

    useEffect(() => {
        const jwtToken = Cookies.get("jwt_token"); 
        if (jwtToken) {
          navigate("/dashboard");
        }
      });

    const onHomeSignup = () => {
        // console.log("signup form triggered")
        navigate("/signup")
    }

    const onHomeLogin = () => {
        // console.log("Login Form triggered")
        navigate("/login")
    }

    return(
        <div className = "home-container" > 

            <h1 className="home-head" > SPOTLET </h1>  
            <h1 className="guest-greeting" > Welcome Guest User </h1>
            
            <div className="signup-login-container" >
                <div className=" home-btns-container" >
                    <h1 className="guest-greeting" > Are you a New User ? </h1>
                    <button className="home-btns" onClick={onHomeSignup} type = "button"> Signup  </button>
                </div>
                <div className=" home-btns-container" >
                    <h1 className="guest-greeting" > Are you a Registered User ? </h1>
                    <button className="home-btns" onClick={onHomeLogin} type = "button" > Login  </button>
                </div>
            </div>

        </div>
    )
}

export default Home