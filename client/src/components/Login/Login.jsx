import React, { useState } from "react";
import UserCreate  from './NavBarPerfil';


import {useLocation} from "wouter";
import useUser from '../../hooks/useUser.js';
import { useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from "./Login.module.css";
import { loginService } from '../../redux/actions'

function Login({onLogin}) {

    const dispatch= useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [, navigate] = useLocation();
    const {isLoginLoading, hasLoginError, login, isLogged} = useUser();

    useEffect(() => {
        if (isLogged) {
          navigate('/')
          onLogin && onLogin()
        }
      }, [isLogged, navigate, onLogin])


    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch( loginService({username,password}) );
    }

  return (
    <>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading &&
        <form className='form' onSubmit={handleSubmit}>
          <label>
            username
            <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          </label>

          <label>
            password
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>

          <button className='btn'>Login</button>
        </form>
      }
      {
        hasLoginError && <strong>Credentials are invalid</strong>
      }
    </>
  )
}
export default Login;