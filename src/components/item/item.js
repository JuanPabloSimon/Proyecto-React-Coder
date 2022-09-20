import React from 'react';
import './item.css'
import { Link } from 'react-router-dom';

const Item = ({product}) => {
  return (
    <div className='item'>
        <h2> {product.name} </h2>
        <img className='imgProd' src={product.imgUrl} alt={product.name}/>
        <p> ${product.price} </p>
        <Link to={`/detail/${product.id}`} className='link' >
          Ver Más
        </Link>
    </div>
    );
};

export default Item;
