import './ItemDetailContainer.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemDetail from './ItemDetail';
import products from '../../../utils/products.mock';

const ItemDetailContainer = () => {
  const [ productData, setProductData ] = useState({});
  const [ listProducts, setListProducts ] = useState({});

  const { id } = useParams()

  useEffect ( () => {
    // filterById()

    const db = getFirestore();

    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((item) => {
      setListProducts(item.docs.map((item) => ({ id: item.id, ...item.data() })));
      console.log(listProducts)
      filterId()
    });
  }, [listProducts])

  // const filterById = () => {
  //   products.some( (product) =>{
  //     if (product.id == id) {
  //       setProductData(product)
  //     }
  //   }
  // )}

  const filterId = () => {
    setProductData(listProducts.find((product) => product.id == id))
  }

  return(
    <section className='item__detail__container'>
      <ItemDetail data={productData} />
    </section>
  )
}

export default ItemDetailContainer;