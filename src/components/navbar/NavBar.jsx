import './NavBar.scss';
import { Link } from 'react-router-dom';
import CartWidget from './cartwidget/CartWidget';

const NavBar = () => {
  return(
    <nav>
      <header>
        <Link to={'/'}><img src='/assets/img/logo.png' alt='Logo' /></Link>
      </header>
      <footer>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'category/men'}>Hombre</Link></li>
          <li><Link to={'/category/women'}>Mujer</Link></li>
          <li><Link to={'/category/children'}>Niños</Link></li>
          <CartWidget />
        </ul>
      </footer>
    </nav>
  )
}

export default NavBar;