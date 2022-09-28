import styles from "../../../styles/Authentication/Newpass.module.css";

const NewPassword = () => {
  return (
    <>
      <h1 className={styles.login}>
        <b>Restablecer contraseña</b>
      </h1>

      <form className={styles.form}>
       
        <div className={styles.form_div}>
          <label 
          className={styles.label_pass} 
          htmlFor="password">
            <b>Nueva contraseña</b>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Ingrese nueva contraseña"
            className={styles.input}
          />
        </div>

        <input 
        type="submit" 
        value="Guardar nueva contraseña" 
        className={styles.init} />
      </form>
    </>
  );
}

export default NewPassword
