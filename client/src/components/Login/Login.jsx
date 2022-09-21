import React, { useState } from "react";
import UserCreate  from './NavBarPerfil';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from "./Login.module.css";
import { loginService } from '../../redux/actions'

function Login() {

    

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        loginService({username,password});


    }

  return (
    <div className={styles.bodyHome}>

      <form className={styles.navBar} onSubmit={handleSubmit}>
        <input
            type='text'
            value={username}
            name='username'
            placeholder="username..."
            onChange={(e)=>setUsername(e.target.value)}
         />
         <input
            type='password'
            value={password}
            name='password'
            placeholder="password..."
            onChange={(e)=>setPassword(e.target.value)}
         />
         <button>Login</button>
      </form>
      <div className={styles.container}>
       
      </div>
    </div>
  )
}
export default Login;