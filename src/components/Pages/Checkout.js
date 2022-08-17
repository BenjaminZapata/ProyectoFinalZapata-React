import './Checkout.css'
import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Checkout = () => {
    const { cartProducts, totalProductsPriceCheckout, clear, removeFromCart, increaseOneFromCount, removeOneFromCount } = useContext(CartContext)

			return <section className='checkout'>
      <main className='checkout__main'>
          <h1 className='checkout__main__title'>TU CARRITO</h1>
          <p className='checkout__main__total'></p>
          <p>Los artículos en tu carrito no están reservados. Terminá el proceso de compra ahora para hacerte con ellos.</p>
          <div className='checkout__main__offer'>
              <h2>¡COMPRÁ AHORA Y PAGÁ EN 6 CUOTAS!</h2>
              <p>Podés pagar con tus tarjetas Visa, MasterCard o American Express, al hacerlo, podrás pagar hasta en 6 cuotas sin interés.</p>
          </div>
          <section className='checkout__main__list'>
          {cartProducts.map((product) => {
              return(
              <article className='checkout__main__list__product' key={product.id}>
                  <img src={product.image}/>
                  <div className='checkout__main__list__product__info'>
                      <p className='checkout__main__list__product__info__title'>{product.title}</p>
                      <div className='checkout__main__list__product__info__title__amount'>
												<button onClick={() => removeOneFromCount(product)}><RemoveIcon /></button>
												<p>{product.count}</p>
												<button onClick={() => increaseOneFromCount(product)} ><AddIcon /></button>
											</div>
                  </div>
                  <p className='checkout__main__list__product__price'>$ {product.price}</p>
                  <ClearIcon className='checkout__main__list__product__icon' onClick={() => removeFromCart(product.id)}/>
              </article>
              )
          })}
          </section>
          <button className='checkout__main__buyout__button'>Terminar compra</button>
      </main>
      <aside className='checkout__aside'>
          <button className='checkout__aside__buyout__button'>Terminar compra</button>
          <div className='checkout__aside__resume'>
              <h2>RESUMEN DEL PEDIDO</h2>
          </div>
          <input placeholder='Introduce tu código promocional'></input>
          <p>OPCIONES DE PAGO</p>
          <div className='checkout__aside__payments'>
          </div>
      </aside>
  </section>
}

export default Checkout;