import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import {products} from '../Products'


const ItemListContainerCard = () => {
    
    const styles = {
        color: 'white',
        fontFamily: 'Segoe UI',
        fontSize: '30px',
        paddingTop: '20px',
        textAlign: 'center',
    }

    const [items, setItems] = useState([])

    useEffect(() => {
        getProducts().then( response => {
            console.log( response );
            setItems( response )
        })
        }, [])
        
    const getProducts = () => {
        return new Promise( resolve => {
            setTimeout(() => {
            resolve( products )
            }, 1000);
        })
        }

    return (
        <>
            <div style={styles}>HERRAMIENTAS EINHELL</div>
            <div class="flex justify-center">
            <div className="grid grid-cols-3 gap-8">
            { items.map( i => <ItemCard key={i.id} {...i}/> ) }
            </div>
            </div>
        </>
    )
}

export default ItemListContainerCard