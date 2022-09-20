import React, { useContext}  from 'react'
import CartList from '../../components/CartList/cartList'
import { CartContext } from '../../Context/cartContext'
import './cart.css'
import { Link } from 'react-router-dom'
import FinishPurchase from '../Finish/finishPurchase'



const Cart = () => {
  const {itemsAgregados, total} = useContext(CartContext)
  console.log(total)
  return (
    <div className='cart' >
      {itemsAgregados.length !== 0 ? 
       <div>
      <CartList items={itemsAgregados}></CartList>
      <hr style={{marginBottom: 0}}></hr>
      <FinishPurchase></FinishPurchase>
      </div>
      : 
      <div className='cartDiv' >
        <h2>No hay productos agregados</h2>
        <h3>¡Agrega Productos al carrito!</h3>
        <button> <Link to='/products' className='cartLink'>Ir a Productos</Link> </button> 
      </div> }
    </div>
  )
}

export default Cart