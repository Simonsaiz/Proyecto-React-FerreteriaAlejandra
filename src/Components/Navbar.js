import React from 'react'
import Logo from '../recursos/logo ferreteria.png'
import CartWidget from './CartWidget'

const Navbar = () => {
return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-link normal-case text-xl">
                <div>
                    <img className='logoFerre' src={Logo} alt="Logo" width="80" height="80"></img>
                </div>
            </a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
            <li><a>Inicio</a></li>
            <li><a>Productos</a></li>
            <li><a>Ofertas</a></li>
            <li><a>Nosotros</a></li>
            <li><a>Contacto</a></li>
            </ul>
        </div>
    <CartWidget/>
    </div>
)
}

export default Navbar
