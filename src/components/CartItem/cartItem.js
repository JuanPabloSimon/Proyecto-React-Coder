import React, {useContext} from 'react'
import './cartItem.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/cartContext'

const CartItem = ({item}) => {
  const {onDelete} = useContext(CartContext)
  

  return (
    <div className='cartItem'>
        <h2> {item.name} </h2>
        <img  className='imgProdCart' src={item.imgUrl} alt={item.name} ></img>
        <p className='text'> Cantidad: {item.q}</p>
        <p className='text'> Valor por unidad: ${item.price} </p>
        <h4> Valor Total: ${item.price * item.q} </h4>
        <Link className='linkVolver' to={`/detail/${item.id}`}>
        <button className='buttonCart2'> Cambiar cantidad</button>
        </Link>
        <button className='buttonCart' onClick={() => onDelete(item.id)}> Eliminar Productos</button>
    </div>
  )
}

export default CartItem;