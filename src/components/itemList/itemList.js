import React from 'react';
import Item from '../item/item';
import './itemList.css'

const ItemList = ({products}) => {
  return (<div className='itemList'>
      {
          products.map((product) => (
                <Item key={product.id} product={product}></Item>
          ))
      }
  </div>
  );
};

export default ItemList;
