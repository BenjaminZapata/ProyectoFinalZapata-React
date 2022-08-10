import './NavBar.css';
import CartWidget from './CartWidget';
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar () {
    return(
        <nav>
            <header>
                <Link to={'/'}><img src='/assets/img/logo.png' alt='Logo' /></Link>
            </header>
            <footer>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/category/men'}>Hombre</Link></li>
                    <li><Link to={'/category/women'}>Mujer</Link></li>
                    <li><Link to={'/category/kids'}>Niños</Link></li>
                    <li><CartWidget /></li>
                </ul>
            </footer>
        </nav>
    )
}

export default NavBar;