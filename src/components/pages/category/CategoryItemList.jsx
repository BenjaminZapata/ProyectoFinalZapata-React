import Item from "../home/featureditems/Item";

const CategoryItemList = ({data, genderFilter}) => {

  return(
    <>
      {data?.map( (prod) => { 
        if (prod.featured && prod.category == genderFilter){
          return <Item key={prod.id} data={prod}/>
        }
        else{
          return;
        }
      })}
    </>
  )
}

export default CategoryItemList;