import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap'


import './cardComponent.css';
import ItemCount from '../ItemCount/itemCount';


const CardComponent = ({name, value, carac, img}) => (
  <div className='contenedor'>
  <Card>
    <CardBody>
      <CardTitle tag="h5"> {name} </CardTitle>
      <img src={img} alt='plant-img' />
      <CardSubtitle className="mb-2 text-muted" tag="h6" > {value} </CardSubtitle>
      <CardText> {carac} </CardText>
      <ItemCount onAdd={() => {console.log('Producto Agregado al carrito')}}/>
    </CardBody>
  </Card>
</div>
)

export default CardComponent;