import './Checkout.scss'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Box, Typography } from '@mui/material';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { CartContext } from '../../contexts/CartContext';
import CheckoutItem from './CheckoutItem';

const Checkout = () => {
    const { cartProducts, totalPrice, checkoutTotalPrice } = useContext(CartContext)
		const [ orderCompleted, setOrderCompleted ] = useState()
		const [ totalPriceResume, setTotalPriceResume ] = useState(checkoutTotalPrice)

		const [ formData, setFormData ] = useState({
			name: '',
			phone: '',
			email: ''
		})
		const [ order, setOrder ] = useState({
			items: cartProducts.map((product) => {
				return {
					id: product.id,
					title: product.title,
					price: product.price,
					count: product.count
				}
			}),
			buyer: formData,
			total: totalPrice
		})
		
		const handleChange = (e) =>{
			setFormData({...formData, [e.target.name]: e.target.value})
		}
		const sendOrder = (e) => {
			e.preventDefault()
			pushData({...order, buyer: formData})
		}
		const pushData = async (newOrder) => {
			const db = getFirestore();
			const collectionOrder = collection(db, 'orders')
			const orderDoc = await addDoc(collectionOrder, newOrder)
			setOrderCompleted(orderDoc.id)
			console.log('Orden: ', orderDoc)
		}
		
		const [ open, setOpen ] = useState(false);
		const handleOpen = () => setOpen(true);
		const handleClose = () => setOpen(false);
		const modalStyle = {
			position: 'absolute',
  		top: '50%',
  		left: '50%',
  		transform: 'translate(-50%, -50%)',
  		width: 400,
  		bgcolor: 'background.paper',
  		border: '2px solid #000',
  		boxShadow: 24,
  		p: 4,
		};

			return <section className='checkout'>
      { cartProducts.length > 0 ? <>
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
							<CheckoutItem product={product} key={product.id} />
              )
          })}
          </section>
          <button className='checkout__main__buyout__button' onClick={handleOpen}>Terminar compra</button>
					<Modal
      		  open={open}
      		  onClose={handleClose}
      		  aria-labelledby="modal-modal-title"
      		  aria-describedby="modal-modal-description"
      		>
      		  <Box  sx={modalStyle}>
							{orderCompleted ? (<>
									<h2>Orden completa</h2>
									<p>ID de compra: {orderCompleted}</p>
								</> )
								:
								(<>
									<Typography id="modal-modal-title" variant="h6" component="h2">
          				  Datos del comprador
          				</Typography>
          				<form onSubmit={sendOrder} className='sendOrder'>
										<input 
											type='text' 
											name='name' 
											placeholder='Nombre completo'
											value={formData.name}
											onChange={handleChange}
											/>
										<input 
											type='number' 
											name='phone' 
											placeholder='Numero de telefono'
											value={formData.phone}
											onChange={handleChange}
											/>
										<input 
											type='email' 
											name='email' 
											placeholder='Correo electronico'
											value={formData.email}
											onChange={handleChange}
											/>
										<input type='submit'/>
									</form>
								</>)}
      		  </Box>
      		</Modal>
      </main>
      <aside className='checkout__aside'>
        <button className='checkout__aside__buyout__button' onClick={handleOpen}>Terminar compra</button>
        <div className='checkout__aside__resume'>
          <h2>RESUMEN DEL PEDIDO</h2>
					<section>
						<p>Subtotal</p>
						<p>$ {totalPriceResume}</p>
					</section>
        </div>
        <input placeholder='Introduce tu código promocional'></input>
      </aside>
		</> :
		<>
		<main className='checkout__main'>
        <h1 className='checkout__main__title'>TU CARRITO ESTA VACIO</h1>
        <p className='checkout__main__total'></p>
        <p>Una vez que añadas algo a tu carrito, aparecerá acá. ¿Listo para empezar?</p>
        <button className='checkout__main__buyout__button'><Link to={'/'}>Empezar</Link></button>
      </main>
      <aside className='checkout__aside'>
      </aside></>}
  </section>
}

export default Checkout;