import React from 'react'
import { useEffect, useState } from "react";
import './FeaturedItems.css';
import ItemList from '../Products/ItemList';
import products from "../../utils/products.mock"
import { collection, getDocs, getFirestore } from "firebase/firestore"

function FeaturedItems () {
    const [listProducts, setListProducts] = useState([])

    // const getProducts = new Promise( (resolve, reject) => {
    //     resolve(products)
    // })

    // useEffect(() => {
    //     getProducts
    //         .then( (res) => { // OK
    //             setListProducts(res)
    //         })
    //         .catch( (err) => { // ERROR
    //         })
    //         .finally( () => { // Final de la llamada, indiferente del resultado
    //         })
    // }, [])

    useEffect(() =>{
        const db = getFirestore();

        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).then((item) => {
                setListProducts(item.docs.map((item) => ({ id: item.id, ...item.data() })));
        });
    }, []);

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