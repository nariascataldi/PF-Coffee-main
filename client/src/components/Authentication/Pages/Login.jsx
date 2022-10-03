import { Link } from 'react-router-dom';

import styles from "../../../styles/Authentication/Login.module.css";

const Login = () => {
  return (
    <>
      <h1 className={styles.login}>
        <b>Inicia sesion </b>
      </h1>
      <form className={styles.form}>
        <div className={styles.form_div}>
          <label className={styles.label} htmlFor="email">
            <b>Email</b>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de registro"
            className={styles.input}
          />
        </div>

        <div className={styles.form_div}>
          <label className={styles.label_pass} htmlFor="password">
            <b>Password</b>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de registro"
            className={styles.input}
          />
        </div>

        <input type="submit" value="Inicia sesion" className={styles.init} />
      </form>

      <nav className={styles.nav}>
        <Link className={styles.link} to="/register">
          ¿Aún no tienes cuenta? Regístrate
        </Link>

        <Link className={styles.link} to="/forget-password">
          ¿Olvidaste tu password?
        </Link>
      </nav>
    </>
  );
}

export default Login

