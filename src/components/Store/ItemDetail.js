import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import './ItemDetail.css';

const ItemDetail = ({data}) => {
    const [quantitySelected, setQuantitySelected] = useState(0);

    const {id, title, price, image, stock, colours, featured, category, subcategory} = data;

    return(
        <section>
            <article className='item__detail'>
                <picture>
                    <img className='item__detail__image' src={`${data.image}`} alt='Imagen del producto' />
                </picture>
                <aside className='item__detail__info'>
                    <h3 className='detail__info__category'>{category} • {subcategory}</h3>
                    <h2 className='detail__info__title'>{title}</h2>
                    <p className='detail__info__price'>$ {price}</p>
                    <h3 className='detail__info__colours'>{colours}</h3>
                    {
                        quantitySelected >= 1 ? <Link to='/checkout'><button className='detail__info__button'>Terminar compra</button></Link>:<ItemCount setQuantitySelected={setQuantitySelected} stock={stock} productData={data}/>
                    }
                </aside>
            </article>
        </section>
    )
}

export default ItemDetail;

