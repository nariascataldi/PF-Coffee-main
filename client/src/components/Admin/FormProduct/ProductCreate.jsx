import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { titleValidator } from "./validators";
import { postProduct } from "../../../redux/actions"; //2
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
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/15/18/8d/1a/cafe-tinto-de-la-sierra.jpg',
      // disable: false,
      // like: '5',
      stock: '10',
      diet: '',

    }
  });
  const onSubmit = (data, e) => {
    console.log(data);
    e.preventDefault();
    dispatch(postProduct(data));
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
        <input 
        className={style.input_formu} 
        type="text" 
        placeholder="Nombre" 
        maxLength={50}
        {...register('title', {
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
      <div className={style.description}>
        <label>Descripción del Producto</label>
        <input className={style.input_formu} type="text" placeholder="Opcional" {...register('description', {
          required: true,
          maxLength: 400,
          pattern: /^[A-Za-z]+$/i,
        })} />
        {errors.description?.type === 'required' && <p className={style.p_form}>Campo requerido</p>}
        {errors.description?.type === 'required' && <p className={style.p_form}>Excede al máximo de caracteres</p>}
        {errors.description?.type === 'pattern' && <p className={style.p_form}>Agregar description con solo letras</p>}
      </div>
      <div className={style.image}>
        <label>Imágen del Producto</label>
        <input className={style.input_formu} type="text" placeholder="direccion de img" {...register('image', {
          required: false,
          maxLength: 100,
          pattern: /(https?:\/\/.*\.(?:png|jpg))/,
        })} />
        {errors.image?.type === 'required' && <p className={style.p_form}>Campo requerido</p>}
        {errors.image?.type === 'required' && <p className={style.p_form}>Excede al máximo de caracteres</p>}
        {errors.image?.type === 'pattern' && <p className={style.p_form}>Agregar description con solo letras</p>}
      </div>
      <div className={style.stock}>
        <label>Cantidad</label>
        <input className={style.input_formu} type="number" placeholder="8 letras" {...register('stock', {
          required: true,
          pattern: /^\d{1,2}$/,
        })} />
        {errors.stock?.type === 'required' && <p className={style.p_form}>El campo es requerido</p>}
        {errors.stock?.type === 'pattern' && <p className={style.p_form}>Debe contener numeros</p>}
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