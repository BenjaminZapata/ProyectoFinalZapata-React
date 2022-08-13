import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import products from "../../utils/products.mock";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [productData, setProductData] = useState ({});

    const { id } = useParams()

    useEffect ( () => {
        filterById()
    }, [id])

    const filterById = () => {
        products.some( (product) =>{
            if (product.id == id) {
                setProductData(product)
            }
        }
    )}

    return(
        <section className='item-detail-container'>
            <ItemDetail data={productData} />
        </section>
    )
}

export default ItemDetailContainer;