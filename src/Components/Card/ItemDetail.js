import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../Products'
import ItemListCount from '../Counter Card/ItemListCount'

const ItemDetail = () => {

const {id: itemId} = useParams()

const [item, setItem] = useState({}) 
    
    useEffect(() => {
        getItemDetail().then( response => {
            setItem ( response )
        })
    }, [])
    


const getItemDetail  = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve ( products.find( p => p.id === Number(itemId) ) )
        }, 1000);
    })
}

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-10">
            <figure><img class="rounded-full" src={item.img} alt={item.name}/></figure>
            <div className="card-body">
                <h2 className="card-title" class="text-red-600 font-semibold">{ item.name }</h2>
                <p class>Precio { item.price }</p>
                <ItemListCount/>
            </div>
        </div>
    )
}

export default ItemDetail