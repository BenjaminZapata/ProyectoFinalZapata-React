import './Item.css';
import ItemCount from './ItemCount';

const Item = ({data}) =>{
    const {title, image, price, id} = data

    return(
        <div className="productCard">
            <img src={`${image}`}></img>
            <h5>{title}</h5>
            <h5>$ {price}</h5>
            <ItemCount />
        </div>
    )
}

export default Item