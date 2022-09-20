import React, { useContext} from 'react'
import img from '../assets/carrito.png'
import 'animate.css';
import { CartContext } from '../../Context/cartContext';
import './cartWidget.css'

const CartWidget = () => {
    const {itemsAgregados} = useContext(CartContext)
    
    
    return (
      <div className='cartWidget'>
        <img src={img} alt='imagen-carrito' className={itemsAgregados.length !== 0 ? 'animate__animated animate__swing normal' :   'normal' }  />
      </div>
  )
}


export default CartWidget

