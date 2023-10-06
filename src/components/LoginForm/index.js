import "./index.css"

const LoginForm = () => {
    return (
        <form className="signup-form" >
            <div className="input-el-container" >
                <label> First Name </label>
                <input type="input"  className="input-el" placeholder="Enter your First Name"  required   />
            </div>
        </form>
    )
}

export default LoginForm