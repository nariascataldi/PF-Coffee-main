import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { postUser } from "../../../redux/actions"; //2
import { useDispatch } from "react-redux";

import 'react-datepicker/dist/react-datepicker.css';
import "bootstrap/dist/css/bootstrap.min.css";
import style from './ProductCreate.module.css';

// https://reactdatepicker.com/

const FormularioProducto = () => {
  const dispatch = useDispatch();

  const { register, formState: { errors }, watch, handleSubmit } = useForm({
    defaultValues: {
      title: 'Brendan', 
      price: '0',                         //*
      cost: '0',                          //*
      description: 'client',              //*
      image: 'javascript@brave.etc',      
      // disable: false,
      // like: '5',
      stock: '10',                        
      diet: '',

    }
  });
  const onSubmit = (data, e) => {
    console.log(data);
    e.preventDefault();
    dispatch(postUser(data));
    alert('User create successfuly!');
    e.target.reset();
  }
  const incluirCUIT = watch('incluirCUIT');
  return <div>
    <h2>Editar Perfil</h2>
     {/* <p>Nombre: {watch('title')}</p> */}
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.title}>
        <label>Nombre</label>
        <input className='inp-formu-user' type="text" placeholder="Brendan" {...register('title', {
          required: true,
          minLength: 1,
          maxLength: 50,
          pattern: /^[A-Z][a-z][^$()!¡@#/=¿{}?*%&|<>#]*$/,
        })} />
        {errors.name?.type === 'required' && <p>El campo nombre es requerido</p>}
        {errors.name?.type === 'maxLength' && <p>El campo nombre debe tener menos de 50 caracteres</p>}
        {errors.name?.type === 'pattern' && <p>El campo nombre contener letras</p>}
      </div>
      <div className={style.lastName}>
        <label>Apellido</label>
        <input className='inp-formu-user' type="text" placeholder="Eich" {...register('lastName', {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i
        })} />
        {errors.lastName?.type === 'required' && <p>El campo apellido es requerido</p>}
        {errors.lastName?.type === 'maxLength' && <p>El campo apellido debe tener menos de 20 caracteres</p>}
        {errors.lastName?.type === 'pattern' && <p>El campo apellido debe tener menos de 20 caracteres</p>}
      </div>
      <div className={style.mail}>
        <label>Email</label>
        <input className='inp-formu-user' type="text" placeholder="javascript@brave.etc" {...register('mail', {
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
        })} />
        {errors.mail?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
      </div>
      <div className={style.pass}>
        <label>Contraseña</label>
        <input className='inp-formu-user' type="password" placeholder="8 letras" {...register('pass', {
          required: true,
          maxLength: 8,
          pattern: /^[A-Za-z]+$/i,
        })} />
        {errors.name?.type === 'required' && <p>El campo nombre es requerido</p>}
        {errors.name?.type === 'maxLength' && <p>El campo nombre debe tener menos de 8 caracteres</p>}
        {errors.name?.type === 'pattern' && <p>El campo nombre debe tener letras</p>}
      </div>
      <div className={style.checkCUIT}>
        <label>¿Incluir CUIT?</label>
        <input className='inp-formu-user' type="checkbox" {...register('incluirCUIT')} />
      </div>
      {incluirCUIT && (
        <div className={style.numberCUIT}>
          <label>CUIT</label>
          <input className='inp-formu-user' type="number" placeholder="javascript@brave.etc" {...register('CUIT')} />
        </div>
      )}
      <input className='inp-formu-user' type="submit" value="Enviar" />
    </form>
  </div>
}

export default FormularioProducto;
/* <div className={}>
<label>Dirección</label>
<input type="text" placeholder="Calle Mocha 1995, Salta, Argentina" {...register('direccion', {
  required: true
})} />
</div> 
<div>
<label>Teléfono</label>
<input type="tel" placeholder="+54 9 387 123 1234" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
</div>
*/