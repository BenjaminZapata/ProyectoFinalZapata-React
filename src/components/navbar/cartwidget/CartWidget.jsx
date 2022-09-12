import './CartWidget.scss';
import { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Menu } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import CartWidgetItem from "./CartWidgetItem";

const CartWidget = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { cartProducts, totalProductsPrice, clear } = useContext(CartContext)  

  // Handle menu
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ShoppingCart
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
      }}>
        {cartProducts.map(( product ) =>{
          return (
            <CartWidgetItem data={product} key={product.id} />
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