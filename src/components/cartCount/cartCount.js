import React from 'react'

const CartCount = ({item}) => {
  return (
    <li className='text'>
        {item.name} x{item.q}
    </li>
  )
}

export default CartCount