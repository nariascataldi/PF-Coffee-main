import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { nameValidator } from "./validators";
import DatePicker from 'react-datepicker';
import { postUser } from "../../../redux/actions";
import { useDispatch } from "react-redux";

import 'react-datepicker/dist/react-datepicker.css';
import "bootstrap/dist/css/bootstrap.min.css";
import style from './UserCreate.module.css';


// https://reactdatepicker.com/

const FormularioUsuario = () => {
  const dispatch = useDispatch();
  const [birthday, setBirthday] = useState(null);
  const { register, formState: { errors }, watch, handleSubmit } = useForm({
    defaultValues: {
      name: 'Brendan',
      lastName: 'Eich',
      status: 'client',
      mail: 'javascript@brave.etc',
      pass: 'abcdefgh',
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
    {/* <p>Nombre: {watch('name')}</p> */}
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.name}>
        <label>Nombre</label>
        <input className='inp-formu-user' type="text" placeholder="Brendan" {...register('name', {
          required: true,
          maxLength: 20,
          pattern: /^[A-Z][a-z][^$()!¡@#/=¿{}?*%&|<>#]*$/,
          validate: nameValidator

        })} />
        {errors.name?.type === 'validate' && <p>El campo nombre es requerido</p>}
        {errors.name?.type === 'maxLength' && <p>El campo nombre debe tener menos de 20 caracteres</p>}
        {errors.name?.type === 'pattern' && <p>Comience el nombre con letra mayúscula. Solo se aceptan los caracteres "":.,_-</p>}
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
      <div className={style.birthday}>
        <label>Fecha Nacimiento</label>
        <DatePicker
          selected={birthday}
          onChange={date => setBirthday(date)}
          dateFormat='dd/MM/yyyy'
          isClearable
          showYearDropdown
          scrollableYearDropdown
          placeholderText="dd/mm/yyyy"
          maxDate={new Date()}
        />
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

export default FormularioUsuario;
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