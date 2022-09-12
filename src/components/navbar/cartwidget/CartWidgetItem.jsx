import { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartWidgetItem = ({data}) => {
  const [ itemCount, setItemCount ] = useState(data.count);
  const { removeFromCart, increaseOneFromCount, removeOneFromCount } = useContext(CartContext);

  const increaseItemCount = (data) => {
    if (data.count < data.stock){
      increaseOneFromCount(data)
      setItemCount(itemCount + 1)
    }
    else{
      return
    }
  }
  const decreaseItemCount = (data) => {
    if (data.count == 1){
      removeFromCart(data.id)
    }
    else{
      removeOneFromCount(data)
      setItemCount(itemCount - 1)
    }
  }
  
  return(
    <div className='cart__product'>
      <img src={data.image} alt={data.title}></img>
      <div className='cart__product__details'>
        <p className='cart__product__details__title'>{data.title}</p>
        <div className='cart__product__details__amount'>
          <button onClick={() => increaseItemCount(data)} className='cart__product__details__amount__button' ><AddIcon className='cart__product__details__amount__button__content' /></button>
          <p>{itemCount}</p>
          <button onClick={() => decreaseItemCount(data)} className='cart__product__details__amount__button'><RemoveIcon className='cart__product__details__amount__button__content' /></button>
        </div>
      </div>
      <div className='cart__product__details'>
            <p>${data.price}</p>
        </div>
        <div className='cart__product__delete' onClick={() => removeFromCart(data.id)}><DeleteIcon /></div>
    </div>
    
  )
}

export default CartWidgetItem;