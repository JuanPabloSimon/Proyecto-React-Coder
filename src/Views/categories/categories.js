import React, {  useEffect, useState} from 'react'

import './categorie.css'

//React Router Dom
import { useParams } from 'react-router-dom'

//Firebase
import { collection, query, getDocs, where } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import ItemList from '../../components/itemList/itemList'

const Categories = () => {
    const [categorieData, setCategorieData] = useState([])
    const cat = useParams()
    const prodCat = cat.type;
    // console.log(prodCat)

    useEffect(() => {
        const getData = async () => {
            const q = query(collection(db, "Productos"), where("type", "==", prodCat)
            );
            const prods = [];
            const querySnapshot = await getDocs(q);
            // console.log(querySnapshot)
            querySnapshot.forEach((doc) => {
                prods.push({...doc.data(), id: doc.id})
            })
            // console.log(prods)
            setCategorieData(prods)
        };
        getData()
    },[prodCat]);

  return (
    <div className='categorie'>
        <h2> {prodCat} </h2>
        <ItemList products={categorieData}></ItemList>
    </div>
  )
}

export default Categories