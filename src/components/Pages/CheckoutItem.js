import { CartContext } from '../Context/CartContext';
import { useContext, useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CheckoutItem = ({product}) => {
	const { removeFromCart, increaseOneFromCount, removeOneFromCount } = useContext(CartContext)

		const {id, title, price, image, stock, colours, featured, category, subcategory} = product;

    return(
        <article className='checkout__main__list__product'>
          <img src={product.image}/>
          <div className='checkout__main__list__product__info'>
              <p className='checkout__main__list__product__info__title'>{product.title}</p>
            <div className='checkout__main__list__product__info__title__amount'>
			    	<button onClick={() => removeOneFromCount(product)}><RemoveIcon /></button>
			    	<p>{product.count}</p>
			    	<button onClick={() => increaseOneFromCount(product)} ><AddIcon /></button>
			    </div>
          </div>
          <p className='checkout__main__list__product__price'>$ {product.price}</p>
          <ClearIcon className='checkout__main__list__product__icon' onClick={() => removeFromCart(product.id)}/>
        </article>
    )
}

export default CheckoutItem;