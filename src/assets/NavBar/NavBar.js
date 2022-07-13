import './NavBar.css';
import logo from "./logo.png";

function NavBar() {
    return (
        <nav>
            <img src={logo} alt="" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Info</a></li>
                <li><a href="#">Tienda</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;