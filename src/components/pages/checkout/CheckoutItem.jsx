import { CartContext } from '../../contexts/CartContext';
import { useContext, useState } from 'react';
import ChekckoutItemCount from './CheckoutItemCount';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CheckoutItem = ({product}) => {
	const { removeFromCart } = useContext(CartContext)

	const {id, title, price, image} = product;
  return(
    <article className='checkout__main__list__product'>
      <img src={image}/>
      <div className='checkout__main__list__product__info'>
        <p className='checkout__main__list__product__info__title'>{title}</p>
        <ChekckoutItemCount product={product}/>
      </div>
      <p className='checkout__main__list__product__price'>$ {price}</p>
      <ClearIcon className='checkout__main__list__product__icon' onClick={() => removeFromCart(id)}/>
    </article>
  )
}

export default CheckoutItem;