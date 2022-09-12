import { Link } from 'react-router-dom'

const Item = ({data}) => {
    const {title, image, price, id, category, subcategory} = data;

    return(
        <article className='productCard'>
            <Link to={`/item/${id}`}>
                <picture>
                    <img src={`${image}`} alt='Imagen de producto'></img>
                    <h4>$ {price}</h4>
                </picture>
                <footer>
                    <p className='productCard__name'>{title}</p>
                    <p className='productCard__type'>{category} {subcategory}</p>
                </footer>
            </Link>
        </article>
    )
}

export default Item;