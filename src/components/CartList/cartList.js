import React from 'react'
import CartItem from '../CartItem/cartItem';
import CartCount from '../cartCount/cartCount';
import './cartList.css'

const Cartlist = ({items}) => {
  return (
    <div className='cartList'> 
    
    {
      items.map((item) => (
        <CartItem key={item.id} item={item} ></CartItem>
        
        ))
      }
      <aside>
        <h5> Compra Total: </h5>
        <ul>
          {
          items.map((item) => (
            <CartCount key={item.id} item={item}></CartCount>
            ))
          }
        </ul>
      </aside>
      
    </div>
  )
}

export default Cartlist;