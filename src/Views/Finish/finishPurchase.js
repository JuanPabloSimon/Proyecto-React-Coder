import React, { useState, useContext } from 'react';
import { CartContext } from '../../Context/cartContext';
// Firebase
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import validator from 'validator';


import TextField from '@mui/material/TextField';
import './finishPurchase.css'
import FinishMessage from './FinishMessage';

const initialState = {
	name: '',
	lastName: '',
	email: '',
};


const FinishPurchase = () => {
    const {itemsAgregados} = useContext(CartContext)
	const [comprador, setComprador] = useState(initialState);
	const [purchase, setPurchase] = useState('')
	const [error, setError] = useState(false);

    // console.log(itemsAgregados)

	const validation = () => {
		if (
		  validator.isAlpha(comprador.name) &&
		  validator.isLength(comprador.name, [{ min: 2, max: 25 }]) &&
		  validator.isAlpha(comprador.lastName) &&
		  validator.isLength(comprador.lastName, [{ min: 2, max: 15 }]) &&
		  validator.isEmail(comprador.email) &&
		  validator.isLength(comprador.email, [{ min: 6, max: 30 }])
		) {
		  return true;
		} else {
		  return false;
		}
	}

	const handleOnChange = (e) => {
			const { value, name } = e.target;
			setComprador({ ...comprador, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		
		if(validation()) {
			setError(false)
			console.log(comprador);
			const docRef = await addDoc(collection(db, 'Pedidos'), {
				comprador, ...itemsAgregados
			});
			setComprador(initialState);
			setPurchase(docRef.id)
		} else {
			setError(true)
		}
	};

	return (
		<div className='ContainerForm'>
			<h1>Finalizar Compra</h1>
			<form className='FormFinish' onSubmit={onSubmit}>
				<TextField
                    className='name'
					placeholder='Name'
					style={{ margin: 10, width: 400 }}
					value={comprador.name}
					name='name'
					onChange={handleOnChange}
				/>
				<TextField
                    className='LastName'
					placeholder='Last Name'
					style={{ margin: 10, width: 400 }}
					value={comprador.lastName}
					name='lastName'
					onChange={handleOnChange}
				/>
				<TextField
                    className='Email'
					placeholder='Email'
					style={{ margin: 10, width: 400 }}
					value={comprador.email}
					name='email'
					onChange={handleOnChange}
				/>
				<div className='textError'>
					{error ? (
						<p> Por favor, complete todos los campos correctamente.</p>
					) : null}
				</div>
				<button className='btnASendAction submit'>Enviar Pedido</button>
			</form>
			{purchase ? <FinishMessage id={purchase}></FinishMessage> : <div></div>}
		</div>
	);
};

export default FinishPurchase;
