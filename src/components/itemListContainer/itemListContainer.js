import React, {useState, useEffect} from 'react';
import ItemList from '../itemList/itemList';
import './itemListContainer.css'

//Firebase - FIRESTORE
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => { 

        const getProducts = async () => {
            const q = query(collection(db, "Productos"));
            const prods =[];
            const querySnapshot = await getDocs(q);
            // console.log('DATA:', querySnapshot)
            querySnapshot.forEach((doc) => {
                prods.push({...doc.data(), id: doc.id})
            })
            console.log(prods)
            setProducts(prods)
        }
        getProducts()

    }, []);
  
    return (
        <div className='listCont'>
                <h2> Todos los Productos </h2>
                <ItemList products={products}></ItemList>    
        </div>
    );
};

export default ItemListContainer;

