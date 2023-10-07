import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({element}) => {
    const jwtToken = Cookies.get("jwt_token");
    const navigate = useNavigate();
    if (jwtToken === undefined || jwtToken === null) {
        navigate("/");
        return null;
    }
    else{
        return element;
    }


}

export default ProtectedRoute