import React from 'react';
import './Home.css'

import Header from '../../components/Header/header';
// import ItemListContainer from '../../components/itemListContainer/itemListContainer';
import Destacados from '../categories/destacados';


const Home = () => {
  return ( 
    <div className='home'>
      <Header/>
      <h2 className='homeTitle'> Productos Destacados </h2>
      {/* <ItemListContainer/> */}
      <Destacados/>
    </div>);
};

export default Home;
