import React from 'react'

const Tools = ({Herramientas}) => {
    const styles= {
        textAlign: 'center',
        fontFamily:'Segoe UI',
        fontSize: '20px',
        fontWeight: 'bold',
        color: 'grey',
        marginTop: '50px',
    }
  return (
    <div style={styles}> Herramientas: {Herramientas}</div>
  )
}

export default Tools