import './productCards.css';
import ItemCount from './ItemCount';

const ProductCards = ({data}) =>{
    const {title, image, price} = data;

    return(
        <div className="productCard">
            <img src={`${image}`}></img>
            <h5>{title}</h5>
            <h5>$ {price}</h5>
            <ItemCount />
        </div>
    )
}

export default ProductCards;