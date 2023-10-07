import NavbarComponent from "../NavbarComponent"
import "./index.css"

const Dashboard = () => {

    const username = localStorage.getItem("username");
    // console.log(username)

    const dashboardSec = () => (
        <div className="dashboard-sec" > 
            <h1 className="dashboard-head"> Welcome to the Dashboard -- {username} </h1>
            <img src = "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                 alt = "profile-pic" className="profile-img" 
            />
        </div>
    )

    return(
        <div className="dashboard-container" >
             <NavbarComponent/>
             {dashboardSec()}
        </div>
    )
}

export default Dashboard