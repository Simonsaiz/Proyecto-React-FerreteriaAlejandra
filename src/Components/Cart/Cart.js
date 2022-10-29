import React from 'react'
import { useCartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import ItemCart from './CartItem'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
      buyer: {
        name: '',
        email: '',
        phone: '',
        addres: ''
      },
      items: cart.map((product ) => ({
        id: product.id,
        title: product.name,
        price: product.price,
        quantity: product.quantity,
      })),
    total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))
    }

    if (cart.length === 0) {
        return(
            <>
                <div className='card-title text-white-500 text-xl m-5'>No hay herramientas en el carrito</div>
                <Link to='/productos'><button className='btn bg-red-600 m-5'>Ver productos</button></Link>
            </>
        )
    }

  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />) 
      }
      <div className='text-purple-700 text-xl ml-10'>
        Total: ${totalPrice()}
      </div>
      <button onClick={handleClick}>Realizar compra</button>
    </>
  )
}

export default Cart