import './NavBar.css';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <nav>
            <img className="logo" src="/assets/img/logo.png"></img>
            <ul>
                <li><button>Info</button></li>
                <li><button>Home</button></li>
                <li><button>Tienda</button></li>
                <li><button><CartWidget /></button></li>
            </ul>
        </nav>
    )
}

export default NavBar