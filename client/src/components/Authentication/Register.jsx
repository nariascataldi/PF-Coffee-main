import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import { postUser } from '../../redux/actions'
import styles from "../../styles/Authentication/Register.module.css";

const Register = () => {

  const dispatch = useDispatch();

  const msjPost = useSelector(state=> state.msj);

  const [input, setInput] = useState({
    name: "",
    lastName: "",
    mail: "",
    pass: "",
    repeatPass: "",
  });
  const [error, setError] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleChange = e => {
    console.log(e.target.value)
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
    validator(input);
  };

  const validator = (obj)=>{
    setSubmit(false);
    setError("");
    if (obj.name.length<1 || obj.mail.length<1 || obj.pass.length<1 || obj.lastName.length<1 || obj.repeatPass<1) {
      setError("Todos loobjs campos son obligatorios"); console.log(error);
    }
    if (obj.pass !== obj.repeatPass) {
      setError("Las contraseñas deben ser iguales"); console.log(error);
    }
    if (obj.pass.length < 6) {
      setError("La contraseña debe ser mayor de 6 caracteres"); console.log(error);
    }
    if (error.length<1) setSubmit(true);
  };

  const handleSubmit = e => {
    e.preventDefault();

    validator(input);

    console.log(input)    
    
    //crear el usuario 
    if (error.length < 1) {
      dispatch(postUser(input));
    } else {alert('revise los datos ingresados')}
    // dispatch(postUser(input));
  };

  return (
    <>
      <h1 className={styles.login}>
        <b>Crear cuenta</b>
      </h1>
      { (!error) ? null :
      <h4 className={styles.login}>{error}</h4>
      }
      { (!msjPost) ? null :
      <h4 className={styles.login}>{msjPost}</h4>
      }
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.form_div}>
          <label className={styles.label} htmlFor="name">
            <b>Nombre</b>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Tu nombre"
            className={styles.input}
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.form_div}>
          <label className={styles.label} htmlFor="lastName">
            <b>Apellido</b>
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Tu nombre"
            className={styles.input}
            value={input.lastName}
            name="lastName"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.form_div}>
          <label className={styles.label} htmlFor="mail">
            <b>Email</b>
          </label>
          <input
            id="mail"
            type="email"
            placeholder="Email de registro"
            className={styles.input}
            value={input.mail}
            name="mail"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className={styles.form_div}>
          <label className={styles.label_pass} htmlFor="pass">
            <b>Contraseña</b>
          </label>
          <input
            id="pass"
            type="password"
            placeholder="Contraseña de registro"
            className={styles.input}
            value={input.pass}
            name="pass"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className={styles.form_div}>
          <label className={styles.label_repeat} htmlFor="password2">
            <b>Repetir contraseña</b>
          </label>
          <input
            id="password2"
            type="password"
            placeholder="Repetir tu contraseña"
            className={styles.input}
            value={input.repeatPass}
            name="repeatPass"
            onChange={(e) => handleChange(e)}
          />
          <br/> <br/>
          <input
            id="check"
            type="checkbox"
            className={styles.input}
            onChange={(e) => handleChange(e)}
          />
          <h5>*si esta seguro con sus datos marque aqui</h5>
        </div>        
        {
          (!submit) ? null : 
          <input type="submit" value="Crear cuenta" className={styles.init} />
        }
      </form>

        {
          (input.name.length<1 || input.mail.length<1 || input.pass.length<5 || input.lastName.length<1 || input.repeatPass<1) ?
          <h1 className={styles.login}>
            COMPLETE LOS DATOS PARA ENVIAR
          </h1>
          :
          null
        }
      {/* <button className={styles.init} onChange={(e)=>handleError(e)}>Pre-Check Errors</button> */}
      <nav className={styles.nav}>
        <Link className={styles.link} to="/login">
          ¿Ya tienes cuenta? Inicia sesión
        </Link>

        <Link className={styles.link} to="/forget-pass">
          ¿Olvidaste tu contraseña?
        </Link>
      </nav>
    </>
  );
};



export default Register;
