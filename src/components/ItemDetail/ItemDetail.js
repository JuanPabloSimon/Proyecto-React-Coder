import React from "react";
import ItemCount from "../ItemCount/itemCount";
import './ItemDetail.css'




const ItemDetail = ({ detail }) => {
  

  return (
    <div className="itemDetail">
      <img className="img" src={detail.imgUrl} alt={detail.name} style={{maxWidth: 15 + 'em'}}/>
      <h2 className="title" > {detail.name} </h2>
      <h3 className="titleCarac h3"> Características del producto</h3>
      <p className="carac" > Frecuencia de Riego : {detail.irrigationFrequency}  - Ubicación: {detail.ubication}</p>
      <h3 className="titlePrice h3"> Precio: </h3>
      <p className="price" > ${detail.price}</p>
      <ItemCount data={detail} className="counter"></ItemCount>
    </div>
  );
};

export default ItemDetail;