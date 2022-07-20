import React, { useState } from 'react';
import './productCards.css';

const ProductCards = ({data}) =>{
    const [counter, setCounter] = useState(1);

    const {title, image, price} = data;

    const addNumber = () =>{
        setCounter(counter + 1)
    }

    const substractNumber = () =>{
        if (counter != 1){
            setCounter(counter - 1)
        }
    }

    return(
        <div className="productCard">
            <img src={`${image}`}></img>
            <h5>{title}</h5>
            <h5>{price}</h5>
            <footer>
                <button onClick={substractNumber}>-</button>
                <p>{counter}</p>
                <button onClick={addNumber}>+</button>
            </footer>
        </div>
    )
}

export default ProductCards;