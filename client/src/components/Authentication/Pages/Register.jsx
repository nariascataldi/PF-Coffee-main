import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import { postUser } from '../../../redux/actions'
import styles from "../../../styles/Authentication/Register.module.css";

const Register = () => {

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    lastName: "",
    mail: "",
    pass: "",
    repeatPass: "",
  });

  const handleChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(input)
    if (
      [ input.name, input.lastName, input.mail, input.pass, input.repeatPass].includes("")
    ) {
      alert("Todos los campos son obligatorios");
    }
    if (input.pass !== input.repeatPass) {
      alert("Las contraseñas deben ser iguales");
    }
    if (input.pass.length < 6) {
      alert("La contraseña debe ser mayor de 6 caracteres");
    }

    //crear el usuario 
    dispatch(postUser(input));
  };

  return (
    <>
      <h1 className={styles.login}>
        <b>Crear cuenta</b>
      </h1>

      <form className={styles.form} onSubmit={handleSubmit}>
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
        </div>

        <input type="submit" value="Crear cuenta" className={styles.init} />
      </form>

      <nav className={styles.nav}>
        <Link className={styles.link} to="/">
          ¿Ya tienes cuenta? Inicia sesión
        </Link>

        <Link className={styles.link} to="/forget-password">
          ¿Olvidaste tu contraseña?
        </Link>
      </nav>
    </>
  );
};

export default Register;
//response.user.email
//response.user.displayName
//response.user.uid
//response.user.photoURL
//response.user.accesToken
//response._tokenResponse.fullName
//response._tokenResponse.lastName
//response._tokenResponse.firstName
//response._tokenResponse.idToken
//response._tokenResponse.emailVerified: true