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
      pass: 'abcdefghA1!',
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
  
  return (
    <div className={style.container}>
      <div className={style.created}>
        <h2 className={style.title}>Editar Perfil</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div >
            <label className={style.label}>Nombre</label>
            <input
              className={style.input_form}
              type="text"
              placeholder="Brendan"
              {...register("name", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Z][a-z][^$()!¡@#/=¿{}?*%&|<>#]*$/,
                validate: nameValidator,
              })}
            />
            {errors.name?.type === "validate" && (
              <p className={style.p_form}>El campo nombre es requerido</p>
            )}
            {errors.name?.type === "maxLength" && (
              <p className={style.p_form}>
                El campo nombre debe tener menos de 20 caracteres
              </p>
            )}
            {errors.name?.type === "pattern" && (
              <p className={style.p_form}>
                Comience el nombre con letra mayúscula. Solo se aceptan los
                caracteres "":.,_-
              </p>
            )}

            <label className={style.label}>Apellido</label>
            <input
              className={style.input_form}
              type="text"
              placeholder="Eich"
              {...register("lastName", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors.lastName?.type === "required" && (
              <p className={style.p_form}>El campo apellido es requerido</p>
            )}
            {errors.lastName?.type === "maxLength" && (
              <p className={style.p_form}>
                El campo apellido debe tener menos de 20 caracteres
              </p>
            )}
            {errors.lastName?.type === "pattern" && (
              <p className={style.p_form}>
                El campo apellido debe tener menos de 20 caracteres
              </p>
            )}
          </div>

          <div className={style.mail}>
            <label className={style.label}>Email</label>
            <input
              className={style.input_form}
              type="text"
              placeholder="javascript@brave.etc"
              {...register("mail", {
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              })}
            />
            {errors.mail?.type === "pattern" && (
              <p className={style.p_form}>El formato del email es incorrecto</p>
            )}
          </div>
          <div className={style.pass}>
            <label className={style.label}>Contraseña</label>
            <input
              className={style.input_form}
              type="password"
              placeholder="8 letras"
              {...register("pass", {
                required: true,
                minLength: 8,
                maxLength: 15,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/,
              })}
            />
            {errors.pass?.type === "required" && (
              <p className={style.p_form}>Es requerido</p>
            )}
            {errors.pass?.type === "maxLength" && (
              <p className={style.p_form}>estar entre 8 y 15 caracteres</p>
            )}
            {errors.pass?.type === "pattern" && (
              <p className={style.p_form}>Caracteres</p>
            )}
          </div>

          <div>
            <label className={style.label}>Fecha Nacimiento</label>
            <DatePicker
              className={style.input_form}
              selected={birthday}
              onChange={(date) => setBirthday(date)}
              dateFormat="dd/MM/yyyy"
              isClearable
              showYearDropdown
              scrollableYearDropdown
              placeholderText="dd/mm/yyyy"
              maxDate={new Date()}
            />
          </div>

          <div className={style.checkCUIT}>
            <label className={style.label}>¿Incluir CUIT?</label>
            <input
              className={style.input_form}
              type="checkbox"
              {...register("incluirCUIT")}
            />
          </div>
          {incluirCUIT && (
            <div className={style.numberCUIT}>
              <label className={style.label}>CUIT</label>
              <input
                className={style.input_form}
                type="number"
                {...register("CUIT")}
              />
            </div>
          )}
          <button className={style.createButton} type="submit" value="Enviar">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormularioUsuario;

