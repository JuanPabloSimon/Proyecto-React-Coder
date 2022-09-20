import React from 'react';
import './navBar.css'
import { Link } from 'react-router-dom';
import CartWidget from '../cartWidget/cartWidget';

const NavBar = () => {
  return <nav className='Navegation'>
    <h1> Vivero Simon </h1>
    <ul>
      {/* <li> <a href='' alt='link-home' >Home</a> </li>
      <li> <a href='' alt='link-products' >Products</a> </li>
      <li> <a href='' alt='link-about' >About</a> </li>
      <li> <a href='' alt='link-contact' >Contact</a> </li>
      <li> <a href='' alt='link-contact' > <img src={img} alt='imagen-carrito' /> </a> </li> */}
      <Link to='/' className='Link' > Home</Link>
      <ul className='dropDown Link'> 
        <p style={{margin:"0"}}> Productos </p>
        <ul>
          <Link className='linkProds' to='/products'> Todos los productos</Link>
          <Link className='linkProds' to='/categorie/Planta decorativa'>Plantas decorativas</Link>
          <Link className='linkProds' to='/categorie/Cubre macetas'>Cubre Macetas</Link>
          <Link className='linkProds' to='/categorie/Cactus'>Cactus</Link>
        </ul>
      </ul>
      <a className='Link' href='https://wa.me/+5492616351701' target='blank'>Contacto</a>
      <Link to='/Cart' className='Link carrito' > <CartWidget/> </Link>
    </ul>
  </nav>;
  
};

export default NavBar;


