import React from 'react'

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

    <div style={styles}>Bienvenidos a nuetra ferreteria, productos y herrmientas al mejor precio'</div>
  )
}

export default ItemListContainer