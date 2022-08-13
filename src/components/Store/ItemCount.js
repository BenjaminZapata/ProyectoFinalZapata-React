import './ItemCount.css'
import { useState, useContext } from 'react'
import { CartContext } from '../Context/CartContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function ItemCount({ setQuantitySelected, stock, productData }) {
    const { addProductToCart } = useContext(CartContext)
    const [ countAmount, setCountAmount ] = useState(1)
    
    const addQuantity = () => {
        if (countAmount == stock){
            return;
        }
        else{
            setCountAmount(countAmount + 1)
        }
    }

    const removeQuantity = () => {
        if (countAmount > 1){
            setCountAmount(countAmount - 1)
        }
        else{
            return;
        }
    }

    const onAdd = () =>{
        setQuantitySelected(countAmount)
        const itemToAdd = {...productData, count: countAmount}
        addProductToCart(itemToAdd)
    }

    return(
        <>
        <div className='item__count'>
            <button className='item__count__button' onClick={removeQuantity}><RemoveIcon sx={{ fontSize: 15 }} className='white' /></button>
            <span className='item__count__display'>{countAmount}</span>
            <button className='item__count__button' onClick={addQuantity}><AddIcon sx={{ fontSize: 15 }} className='white' /></button>
        </div>
        <button className='detail__info__button' onClick={onAdd}>Añadir al carrito <ArrowForwardIcon sx={{ fontSize: 20 }} className='white' /></button>
        </>
    )
}

export default ItemCount