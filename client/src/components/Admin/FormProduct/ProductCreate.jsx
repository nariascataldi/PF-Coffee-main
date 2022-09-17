import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { titleValidator } from "./validators";
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
      title: 'Café café tinto',
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
    <h2>Producto</h2>
    {/* <p className={style.p_form}>Nombre: {watch('title')}</p> */}
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.title}>
        <label>Nombre</label>
        <input className={style.input_formu} type="text" placeholder="Nombre" {...register('title', {
          required: true,
          // minLength: 1, está en la función externa validators
          maxLength: 50,
          pattern: /^[A-Z][a-z][^$()!¡@#/=¿{}?*%&|<>#]*$/,
          validate: titleValidator
        })} />
        {errors.title?.type === 'validate' && <p className={style.p_form}>El campo nombre es requerido</p>}
        {errors.title?.type === 'maxLength' && <p className={style.p_form}>El campo nombre debe tener menos de 20 caracteres</p>}
        {errors.title?.type === 'pattern' && <p className={style.p_form}>Comience el nombre con letra mayúscula. Solo se aceptan los caracteres "":.,_-</p>}
      </div>
      <div className={style.price}>
        <label>Precio al Público</label>
        <input className={style.input_formu} type="number" placeholder="5" {...register('price', {
          required: true,
          pattern: /^\d{1,2}$/,
        })} />
        {errors.price?.type === 'required' && <p className={style.p_form}>Campo obligatorio</p>}
        {errors.price?.type === 'pattern' && <p className={style.p_form}>Solo se aceptan letras</p>}
      </div>
      <div className={style.mail}>
        <label>Email</label>
        <input className={style.input_formu} type="text" placeholder="Opcional" {...register('mail', {
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
        })} />
        {errors.mail?.type === 'pattern' && <p className={style.p_form}>El formato del email es incorrecto</p>}
      </div>
      <div className={style.pass}>
        <label>Contraseña</label>
        <input className={style.input_formu} type="password" placeholder="8 letras" {...register('pass', {
          required: true,
          maxLength: 8,
          pattern: /^[A-Za-z]+$/i,
        })} />
        {errors.name?.type === 'required' && <p className={style.p_form}>El campo nombre es requerido</p>}
        {errors.name?.type === 'maxLength' && <p className={style.p_form}>El campo nombre debe tener menos de 8 caracteres</p>}
        {errors.name?.type === 'pattern' && <p className={style.p_form}>El campo nombre debe tener letras</p>}
      </div>
      <div className={style.checkCUIT}>
        <label>¿Incluir CUIT?</label>
        <input className={style.input_formu} type="checkbox" {...register('incluirCUIT')} />
      </div>
      {incluirCUIT && (
        <div className={style.numberCUIT}>
          <label>CUIT</label>
          <input className={style.input_formu} type="number" placeholder="javascript@brave.etc" {...register('CUIT')} />
        </div>
      )}
      <input className={style.input_formu} type="submit" value="Enviar" />
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