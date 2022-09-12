import { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ChekckoutItemCount = ( {product} ) => {
  const [ itemCount, setItemCount ] = useState(product.count);
  const { increaseOneFromCount, removeOneFromCount, removeFromCart } = useContext(CartContext)

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
    if (data.count === 1){
      removeFromCart(data.id)
    }
    else{
      removeOneFromCount(data)
      setItemCount(itemCount - 1)
    }
  }

  return (
    <div className='checkout__main__list__product__info__title__amount'>
		  <button onClick={() => decreaseItemCount(product)}><RemoveIcon /></button>
		  <p>{itemCount}</p>
		  <button onClick={() => increaseItemCount(product)} ><AddIcon /></button>
		</div>
  )
}

export default ChekckoutItemCount;