import React from 'react'
import { useCartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import ItemCart from './CartItem'

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

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
    </>
  )
}

export default Cart