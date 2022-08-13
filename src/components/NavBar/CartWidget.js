import './CartWidget.css';
import Menu from '@mui/material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';

function CartWidget () {
    const [anchorEl, setAnchorEl] = useState(null);
    const { cartProducts, totalProductsPrice, clear, removeFromCart, increaseOneFromCount, removeOneFromCount } = useContext(CartContext)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
        <ShoppingCartIcon
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        />
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
        'aria-labelledby': 'basic-button',
        }}
        >
            {cartProducts.map((product) => {
                return(
                    <div className='item__cart__product' key={product.id}>
                        <img src={product.image} alt={product.title}></img>
                        <div className='item__cart__product__details'>
                            <p className='item__cart__product__details__title'>{product.title}</p>
                            <div className='item__cart__product__details__amount'>
                                <button onClick={removeOneFromCount()} className='item__cart__product__details__amount__button' ><AddIcon className='item__cart__product__details__amount__button__content' /></button>
                                <p>{product.count}</p>
                                <button onClick={() => increaseOneFromCount} className='item__cart__product__details__amount__button'><RemoveIcon className='item__cart__product__details__amount__button__content' /></button>
                            </div>
                        </div>
                        <div className='item__cart__product__details'>
                            <p>${product.price}</p>
                        </div>
                        <div className='item__cart__product__delete' onClick={() => removeFromCart(product.id)}><DeleteIcon /></div>
                    </div>
                )
            })}
            <footer className='cartFooter'>
                <button className='cartFooter__erase' onClick={() => clear()}>Borrar todo</button>
                <p className='cart__total'>{totalProductsPrice()}</p>
            </footer>
        </Menu>
        </>
    )
}

export default CartWidget;