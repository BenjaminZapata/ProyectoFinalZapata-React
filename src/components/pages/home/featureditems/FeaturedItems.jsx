import './FeaturedItems.scss';
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemList from "./ItemList";

const FeaturedItems = () => {
  const [listProducts, setListProducts] = useState([])

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