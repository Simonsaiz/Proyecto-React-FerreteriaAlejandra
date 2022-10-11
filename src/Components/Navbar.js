import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../recursos/logo ferreteria.png'
import CartWidget from './CartWidget'

const Navbar = () => {
return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <Link to='Inicio' className="btn btn-link normal-case text-xl">
                <div>
                    <img className='logoFerre' src={Logo} alt="Logo" width="80" height="80"></img>
                </div>
            </Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
            <li><Link to='Inicio'>Inicio</Link></li>
            <li><Link to='Productos'>Productos</Link></li>
            <li><Link to=''>Ofertas</Link></li>
            <li><Link to=''>Nosotros</Link></li>
            <li><Link to=''>Contacto</Link></li>
            </ul>
        </div>
    <CartWidget/>
    </div>
)
}

export default Navbar
