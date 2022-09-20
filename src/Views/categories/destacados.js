import React, {useState, useEffect} from 'react'
import { collection, query, getDocs, where } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import ItemList from '../../components/itemList/itemList'

const Destacados = () => {
    const [destacados, setDestacados] = useState([])

    useEffect(() => {
        const getData = async () => {
            const q = query(collection(db, "Productos"), where("destacado", "==", true)
            );
            const prods = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                prods.push({...doc.data(), id: doc.id})
            });
            setDestacados(prods)
        }
        getData()
    },[])
  return (
    <ItemList products={destacados}></ItemList>
  )
}

export default Destacados