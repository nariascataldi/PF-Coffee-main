import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { nameValidator } from "./validators";
import DatePicker from 'react-datepicker';
import { postUser } from "../../../redux/actions";
import { useDispatch } from "react-redux";


// import 'react-datepicker/dist/react-datepicker.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import style from './UserCreate.css';


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
    <div className='container'>
      <div className='created'>
        <h2 className='title'>Edit profile</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="input-group input-group-sm mb-3">
            <label className='input-group-text forLabel'>Name</label>
            <input
              className='form-control forInput'
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
              <p className={style.p_form}>name is required</p>
            )}
            {errors.name?.type === "maxLength" && (
              <p className={style.p_form}>
                name field must be less than 20 characters
              </p>
            )}
            {errors.name?.type === "pattern" && (
              <p className={style.p_form}>
                Begin the name with a capital letter. Only the following characters are accepted
                characters "":.,_-
              </p>
            )}
            </div>
            <div className="input-group input-group-sm mb-3">
            <label className='input-group-text forLabel'>Last name</label>
            <input
              className='form-control forInput'
              type="text"
              placeholder="Eich"
              {...register("lastName", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors.lastName?.type === "required" && (
              <p className={style.p_form}>last name required</p>
            )}
            {errors.lastName?.type === "maxLength" && (
              <p className={style.p_form}>
                last name field must be less than 20 characters
              </p>
            )}
            {errors.lastName?.type === "pattern" && (
              <p className={style.p_form}>
                last name field must be less than 20 characters
              </p>
            )}
          </div>

          <div className="input-group input-group-sm mb-3">
            <label className='input-group-text forLabel'>E-mail</label>
            <input
              className='form-control forInput'
              type="text"
              placeholder="javascript@brave.etc"
              {...register("mail", {
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              })}
            />
            {errors.mail?.type === "pattern" && (
              <p className={style.p_form}>Email formatting is incorrect</p>
            )}
          </div>
          <div className="input-group input-group-sm mb-3">
            <label className='input-group-text forLabel'>Password</label>
            <input
              className='form-control forInput'
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
              <p className={style.p_form}>Password is required</p>
            )}
            {errors.pass?.type === "maxLength" && (
              <p className={style.p_form}>Must be between 8 and 15 characters</p>
            )}
            {errors.pass?.type === "pattern" && (
              <p className={style.p_form}>Characters</p>
            )}
          </div>

          <div className="input-group input-group-sm mb-3">
            <label className='input-group-text forLabel'>Date of Birth</label>
            <DatePicker
              className='form-control forDate'
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

          <div >
            <label className=''>Include CUIT?</label>
            <input
              className='form-check-input mt-0 '
              aria-label="Checkbox for following text input"
              type="checkbox"
              {...register("incluirCUIT")}
            />
          </div>
          {incluirCUIT && (
            <div className= "input-group input-group-sm mb-3">
              <label className='input-group-text forLabel'>CUIT</label>
              <input
                className='form-control forDate'
                type="number"
                {...register("CUIT")}
              />
            </div>
          )}
          <button className='createButton' type="submit" value="Enviar">
          Send
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioUsuario;

