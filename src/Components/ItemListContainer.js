import React from 'react'
import ferreteria from '../recursos/ferreteria 800x400.jpg'

const ItemListContainer = ({Bienvenidos}) => {
    const styles= {
        textAlign: 'center',
        fontFamily:'Segoe UI',
        fontSize: '20px',
        fontWeight: 'bold',
        color: 'white',
        marginTop: '50px',
    }
  return (
    <>
    <div style={styles}>Productos y herrmientas al mejor precio</div>
    <div >
      <img class="ml-5 mt-5 rounded-lg" src={ferreteria}/>
      </div>
    </>
  )
}

export default ItemListContainer