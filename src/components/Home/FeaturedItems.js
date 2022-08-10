import React from 'react'
import { useEffect, useState } from "react";
import './FeaturedItems.css';
import ItemList from '../Products/ItemList';
import products from "../../utils/products.mock"

function FeaturedItems () {
    const [listProducts, setListProducts] = useState([])

    const getProducts = new Promise( (resolve, reject) => {
        resolve(products)
    })

    useEffect(() => {
        getProducts
            .then( (res) => { // OK
                setListProducts(res)
            })
            .catch( (err) => { // ERROR
            })
            .finally( () => { // Final de la llamada, indiferente del resultado
            })
    }, [])

    return(
        <section id='FeaturedItems'>
            <h3 className='FeaturedItems__title'>Productos destacados</h3>
            <div>
                <ItemList data={listProducts}/>
            </div>
        </section>
    )
}

export default FeaturedItems;