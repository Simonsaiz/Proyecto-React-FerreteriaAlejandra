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

    <div style={styles}>{Bienvenidos}</div>
  )
}

export default ItemListContainer