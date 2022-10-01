import React, { useEffect, useState } from "react";
import { auth, signWithGoogle } from "../../firebase";
import { postUser } from "../../redux/actions";
import './SignIn.css'

// import CardInfomativaFormulario from "../../Components/Organisms/CardInformativaFormulario/CardInformativaFormulario";


const SignIn = () => {
    const [user, setUser] = useState([])
    const googleRegister= async()=>{
         await signWithGoogle().then((response) => {
            setUser(response.user);
            console.log('response ',response.user.displayName);
            localStorage.setItem("Sign In", JSON.stringify(user));
            console.log('usuario ',user)
        })
            var newUser ={
                mail: response.user.email,
                name: response.user.displayName,
                lastName: '',
                phone: response.user.phoneNumber,
                avatar: response.user.photoURL,
                
            
        }
        console.log('usuario ',newUser)
        // postUser(newUser)
        
    }
    return(
        <div className='signin-page'>
            <div className='signin-card-wrapper'>

                {/* FORMULARIO CREAR USUARIO CON E-MAIL */}
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
            // onChange={(e) => handleChange(e)}
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
            // onChange={(e) => handleChange(e)}
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
            // onChange={(e) => handleChange(e)}
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
            // onChange={(e) => handleChange(e)}
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
            // onChange={(e) => handleChange(e)}
          />
        </div>

        <input type="submit" value="Crear cuenta" className={styles.init} />
      </form>


                {/* CREAR USUARIO CON GOOGLE */}
                <h1>Inicio de sesión</h1>
                <button className='pay-btn-cart' onClick={googleRegister}>Iniciar con Google</button>
                {user?.displayName && 
                <div className='signin-info-user'>
                    <img src={user?.photoURL? user.photoURL : 'imagen'} className='signin-img-user'/>
                    <p>{user.displayName}</p>
                </div>
                }   
            </div>
            <nav className={styles.nav}>
        <Link className={styles.link} to="/">
          ¿Ya tienes cuenta? Inicia sesión
        </Link>

        <Link className={styles.link} to="/forget-password">
          ¿Olvidaste tu contraseña?
        </Link>
      </nav>
        </div>
    )
}

export default SignIn;