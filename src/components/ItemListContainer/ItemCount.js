import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = () => {
    const [counter, setCounter] = useState(1);

    const addNumber = () =>{
        setCounter(counter + 1)
    }

    const substractNumber = () =>{
        if (counter !== 1){
            setCounter(counter - 1)
        }
    }

    return(
        <>
            <footer>
                <div>
                    <button onClick={substractNumber}>-</button>
                    <p>{counter}</p>
                    <button onClick={addNumber}>+</button>
                </div>
                <button>Add to cart</button>
            </footer>
        </>
    )
}

export default ItemCount