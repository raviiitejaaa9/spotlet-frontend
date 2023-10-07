import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import NavbarComponent from "../NavbarComponent"
import "./index.css"
const Profile = () => {

    // const userInfo = localStorage.getItem("userProfileData");
    const username = localStorage.getItem("username");

    const jwtToken = Cookies.get("jwt_token");
   
    // const parsedUserInfo = JSON.parse(userInfo);
    // console.log(parsedUserInfo)
    // const {email, mobileNumber} = parsedUserInfo;

    const [mail,setMail] = useState("");
    const [number,setNumber] = useState("");

    useEffect( () => {

        const profilrApiUrl = `https://quasar-colossal-wing.glitch.me/profile/${jwtToken}`;
        
        const onProfileApiSuccess = (mail,num) => {
            const numberLength = num.toString().length 
            if (numberLength < 10) {
                const deficit = 10 - numberLength;
                // console.log(deficit)
                const zeros  = "0".repeat(deficit);
                const newNumber = `${zeros}${num.toString()}`
                // console.log(zeros)
                setMail(mail);
                setNumber(newNumber)

            }

        }
        const fetchData = async() => {
            try{
                const profileApiResponse = await fetch(profilrApiUrl);
                if (profileApiResponse.ok){
                    const profileData = await profileApiResponse.json();
                    const {userDetails} =  profileData 
                    const {email, mobileNumber} = userDetails;
                    onProfileApiSuccess(email,mobileNumber);
                }
                else{
                    const profileData = await profileApiResponse.json();
                    console.error(profileData)
                }

            }
            catch(e){
                console.error(e.message);
            }

        }
        fetchData()
    },[jwtToken] )

    
    const profileSec = () => {

        return(
            <div className="profile-sec" >
                <img src = "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                 alt = "profile-pic" className="profile-img" 
                 />
                 <div className="profile-details-sec" >
                        <h1 className="profile-head-el" > <span className="profile-span-el"> Username : </span>  {username}</h1>
                        <h1 className="profile-head-el"> <span className="profile-span-el" > Mobile Number :  </span>{number} </h1>
                        <h1 className="profile-head-el"> <span className="profile-span-el" > Email : </span> {mail}  </h1>
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