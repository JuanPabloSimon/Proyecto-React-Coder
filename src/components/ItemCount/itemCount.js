import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

//React Hot toast 
import { Toaster, toast } from 'react-hot-toast';

import { CartContext } from '../../Context/cartContext';

import './itemCount.css'

const ItemCount = ({data}) => {
    const {itemsAgregados, setItemsAgregados, onAdd, isInCart, onDelete, total, setTotal} = useContext(CartContext) 
    const [ counter, setCounter] = useState(0)

    

    const addToCart = (product, q) => { 
        if (isInCart(product)) {
            if(counter == 1) {
                const modificado = toast.success('Has modificado ' + data.name + ' a ' + counter + ' unidad')
            } else {
                const modificado = toast.success('Has modificado ' + data.name + ' a ' + counter + ' unidades')
            }
            const newCart = itemsAgregados.filter((item) => item.id !== product.id);
            
            
            setItemsAgregados([...newCart, {...product, q: counter}]);
            setCounter(0)
        } else {
            if (counter !== 0) {
                const agregado = toast.success('Has agregado ' + counter + ' ' + data.name)
                    onAdd(
                    data.id,
                    data.name,
                    q,
                    data.price,
                    data.type,
                    data.imgUrl,
                    )

                    // setTotal(total + counter)
            } 
        }
    } 

    const evitarVacio = () => {
        if (counter > 0) {
            return true
        } else {
            return false
        }
    }

    const hayStock = (numero, stock) =>{
        if( numero < stock) {
            return true;
        } else {

            return false;
        }
    }
    
    const OutStock = () => toast.error('Stock máximo');
    
    const handlerCounterUp = (numero, valor) => {
        if (numero >= 0 && hayStock(numero, data.stock)) {
            numero = numero + valor;
        } else {
            OutStock()
        }
        return numero;
    }

    const handlerCounterDown = (numero, valor) => {
        if (numero > 0) {
            numero = numero - valor;
        } else {
            setCounter(0);
        }
        return numero;
    }
    
    
    
    return ( 
            <div className='counter' >
                <button className='decrement' onClick={() => setCounter(handlerCounterDown(counter, 1))}> - </button>
                <p className={evitarVacio() ? 'quantity' : 'quantityError'} >{counter}</p>
                <button className='increment' onClick={() => setCounter(handlerCounterUp(counter, 1))}> + </button>
                <button className='addToCart buttonDetail' onClick={() => addToCart(data, counter)} > Agregar al carrito </button>
                <button className='deleteOfCart buttonDetail' onClick={() => {
                    onDelete(data.id, data.name)
                    setCounter(0)}} > Eliminar del carrito</button>
                <Link to='/products' className='continue buttonDetail'> Seguir comprando </Link>
                <Link to='/cart' className='finish buttonDetail'> Ir a mi carrito </Link>
                <Toaster
                toastOptions={{
                    duration: 3000,
                    style: {
                      background: '#363636',
                      color: '#fff',
                    }
                }}
                />
            </div>

    );
};

export default ItemCount;
