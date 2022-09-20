import React, {useState, useEffect} from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';

//FIREBASE 
import { collection, query, getDocs, where, documentId } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig';


const ItemDetailContainer = () => {
    const [details, setDetails] = useState([]);

    var id = useParams();
    var productID = id.id;

    // console.log(productID)

    useEffect(() => { 
            const getDetail = async () => {
                const q = query(
                    collection(db, "Productos"), 
                    where(documentId(), '==', productID)
                );
                const prods = []
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach((doc) => {
                    prods.push({...doc.data(), id: doc.id});
                });
                setDetails(prods)
            }

            getDetail()
    },[productID]);
  
    return (
        <div className='detailContainer'>
            {
          details.map((detail) => (
              <ItemDetail key={detail.id} detail={detail}>
              </ItemDetail>
            )) 
      }
        </div>
    );
};

export default ItemDetailContainer;

