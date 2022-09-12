import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import CategoryItemList from "./CategoryItemList";
import Item from "../home/featureditems/Item";

const CategoryFeaturedItems = ({genderTitle}) => {
  const [listProducts, setListProducts] = useState([])

  useEffect(() =>{
    const db = getFirestore();

    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((item) => {
      setListProducts(item.docs.map((item) => ({ id: item.id, ...item.data() })));
    });
  }, []);

  return(
    <>
      <article className='CategoryFeaturedItems'>
        <h3 className='CategoryFeaturedItems__title'>Productos destacados</h3>
        <div>
          <CategoryItemList data={listProducts} genderFilter={genderTitle}/>
        </div>
      </article>
      <article className="CategoryItems">
        <h3 className='CategoryItems__title'>Todos los productos</h3>
        <div>
          {listProducts?.map( (prod) => { 
            if (prod.category == genderTitle){
              return <Item key={prod.id} data={prod}/>
            }
            else{
              return;
            }
          })}
        </div>
      </article>
    </>
  )
}

export default CategoryFeaturedItems;