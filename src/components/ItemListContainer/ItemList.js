import Item from "./Item"

const ItemList = ({products}) => {
    return(
        <>
            {products?.map( (prod) => { 
                return <Item key={prod.id} data={prod}/>
            })}
        </>
    )
}

export default ItemList