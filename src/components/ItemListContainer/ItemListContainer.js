import { useEffect, useState } from "react"
import './ItemListContainer.css';
import ItemList from "./ItemList";
import products from "../../utils/products.mock"

const ItemListContainer = () =>{

    const [listProducts, setListProducts] = useState([])

    const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(products)
        }, 2000)
    })

    useEffect(() => {
        getProducts
            .then( (res) => { // OK
                setListProducts(res)
                console.log("Respuesta recibida")
                console.log(res)
            })
            .catch( (err) => { // ERROR
                console.log("ERROR: fallo la llamada")
            })
            .finally( () => { // Final de la llamada, indiferente del resultado
            })
    }, [])

    return (
        <main>
            <section>
                <h3>Productos</h3>
                <article>
                    <ItemList data={listProducts} />
                </article>
            </section>
        </main>
    )
}

export default ItemListContainer