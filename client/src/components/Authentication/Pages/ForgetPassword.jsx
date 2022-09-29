import { Link } from "react-router-dom";

import styles from "../../../styles/Authentication/Login.module.css";

const ForgetPassword = () => {
  return (
    <>
      <h1 className={styles.login}>
        <b>Recuperar cuenta</b>
      </h1>

      <form className={styles.form}>
        <div className={styles.form_div}>
          <label className={styles.label} >
            <b>Email</b>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de registro"
            className={styles.input}
          />
        </div>

        <input
          type="submit"
          value="Enviar instrucciones"
          className={styles.init}
        />
      </form>

      <nav className={styles.nav}>
        <Link className={styles.link} to="/">
          ¿Ya tienes cuenta? Inicia sesión
        </Link>

        <Link className={styles.link} to="register">
          ¿Aún no tienes cuenta? Regístrate
        </Link>
      </nav>
    </>
  );
};

export default ForgetPassword;
