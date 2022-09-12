import Item from "./Item";

const ItemList = ({data}) => {
  return(
    <>
      {data?.map( (prod) => { 
        if (prod.featured){
          return <Item key={prod.id} data={prod}/>
        }
        else{
          return;
        }
      })}
    </>
  )
}

export default ItemList;