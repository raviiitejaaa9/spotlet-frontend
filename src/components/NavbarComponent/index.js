import Cookies from 'js-cookie';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const NavbarComponent = () => {
    const navigate = useNavigate()

    const onClickLogout = () => {
        Cookies.remove("jwt_token");
        navigate("/login");
        localStorage.removeItem("username");
        localStorage.removeItem("userProfiledData");
    }

    const onClickNavLogo = () => {
        navigate("/dashboard");
    }

    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#dashboard" onClick = {onClickNavLogo} >Spotlet</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link > <button onClick={onClickLogout} className="logout-button" > Logout </button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavbarComponent