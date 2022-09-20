import React from 'react'

const FinishMessage = (id) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center' }}>
        <p style={{backgroundColor: '#C8E4E4', width: 'fit-content'}}>
            Gracias por su compra! Su id de transacción es: <strong> {id.id} </strong> 
        </p>
    </div>
  )
}

export default FinishMessage