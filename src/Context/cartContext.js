import React, { createContext, useState } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemsAgregados, setItemsAgregados] = useState([])
  const [total, setTotal] = useState(0)

  const onAdd = ( id, name, quantity, price, type, imgUrl) => {
    
    setItemsAgregados([  
      ...itemsAgregados,
      {
        id: id,
        name: name,
        q: quantity,
        price: price,
        type: type,
        imgUrl: imgUrl,
      }
    ]);

    // if (findId) {
    //     itemsAgregados.cantidad = counter;
    //     alert('has sumado más ' + itemsAgregados.name + ' - Cantidad total: ' + itemsAgregados.cantidad )
    // } else {
    //     if (counter !== 0) {
    //         itemsAgregados.push(itemsAgregados)
    //         itemsAgregados.cantidad = counter; 
    //         alert('Has agregado ' + itemsAgregados.cantidad + ' ' + itemsAgregados.name + ' al carrito')
    //     } else {
    //         alert("no se sumaron productos")
    //     }
        
    // }  

}
  const isInCart = (product) => {
    return itemsAgregados.some((item) => item.id === product.id);
  } 

  const onDelete = (id, name) => {
    const encontrado = itemsAgregados.find(item => item.id === id)
    if(encontrado){
      const deleted = toast.success('Has eliminado todos los todas las unidades de ' + name)
    }
      setItemsAgregados(itemsAgregados.filter(item => item.id !== id));
      
  }

  const clearCart = () => {
    setItemsAgregados([])
  }

  return (
    <CartContext.Provider
      value={{
        itemsAgregados,
        setItemsAgregados,
        onAdd,
        onDelete,
        isInCart,
        clearCart,
        total, 
        setTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};