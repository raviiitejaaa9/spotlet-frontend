import NavbarComponent from "../NavbarComponent"
import "./index.css"
const Profile = () => {

    const userInfo = localStorage.getItem("userProfileData");
    const username = localStorage.getItem("username");
   
    const parsedUserInfo = JSON.parse(userInfo);
    // console.log(parsedUserInfo)
    const {email, mobileNumber} = parsedUserInfo;
    
    const profileSec = () => {
        return(
            <div className="profile-sec" >
                <img src = "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                 alt = "profile-pic" className="profile-img" 
                 />
                 <div className="profile-details-sec" >
                        <h1 className="profile-head-el" > <span className="profile-span-el"> Username : </span>  {username}</h1>
                        <h1 className="profile-head-el"> <span className="profile-span-el" > Mobile Number :  </span>{mobileNumber} </h1>
                        <h1 className="profile-head-el"> <span className="profile-span-el" > Email : </span> {email}  </h1>
                 </div>
            </div>
        )
    }   

    return(
        <div className="dashboard-container" >
            <NavbarComponent/>
            {profileSec()}
        </div>
    )
}

export default Profile