import './NavBar.css';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <nav>
            <header>
                <img className="logo" src="/assets/img/logo.png"></img>
            </header>
            <footer>
                <ul>
                    <li><button>Log In</button></li>
                    <li><button>Info</button></li>
                    <li><button>Home</button></li>
                    <li><button>Tienda</button></li>
                    <li><button><CartWidget /></button></li>
                </ul> 
            </footer>
            
        </nav>
    )
}

export default NavBar