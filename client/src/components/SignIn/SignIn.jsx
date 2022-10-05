import React, { useEffect, useState } from "react";
import { signWithGoogle} from "../../firebase";
import { auth, signUp} from "../../firebase/index";
import {
  getAllUsers,
  postUser,
  setUserInit,
  postNodemailer,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { BsGoogle } from "react-icons/bs";
//createUserWithEmailAndPassword
import './SignIn.css'
import { useNavigate } from "react-router";

import { ToastContainer, toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";

// import CardInfomativaFormulario from "../../Components/Organisms/CardInformativaFormulario/CardInformativaFormulario";


const SignIn =()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {users} = useSelector(state=>state)
    const [usuario, setUsuario] = useState([])
    const [regOrInit , setregOrInit] = useState(false)
    const [authData, setAuthData] = useState({
        firstName:"",
        lastName:"",
        email: "",
        password: "",
        repeatpassword:"",
        avatar:""
      });
    useEffect(()=>{
        dispatch(getAllUsers())
    },[])
    const googleRegister = async () => {   
        console.log('inicio de sesion con google')
        const userInfo= await signWithGoogle()
        console.log('USERINFO', userInfo)
            setUsuario(userInfo);
                var newUser = {
                    id: userInfo.user.uid,
                    name: userInfo._tokenResponse.firstName,
                    lastName: userInfo._tokenResponse.lastName,
                    status: 'Client',
                    mail: userInfo.user.email,
                    avatar: userInfo.user.photoURL,
                
                }
                console.log('NEWUSER', newUser)
                dispatch(postUser(newUser))
                localStorage.setItem("Sign In", JSON.stringify(newUser));
                dispatch(setUserInit())
                navigate('/')
    }
//////////// registro con mail //////////////
    
        const handleSubmit = (e) => {
            e.preventDefault();
             mailRegister();
             dispatch(postNodemailer());
             toast("Welcome email sent! 🧁", {
               position: "top-right",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
             });
            let findMailExist = users.filter(e=>e.mail=== authData.email)
            console.log('usuario existente',findMailExist)
            if(authData.password !==authData.repeatpassword && regOrInit){
              return  alert('Passwords do not match')
            // }if ( findMailExist === authData.email || regOrInit){
            //     return  alert('This email has already been registered before! Try another !')
                        
            } if(authData.email === '' ||authData.password === '' ){
                return  alert('Password and email are required !') 
            }  else {
             return mailRegister();
            }
          };

          const handleChange = (e) => {
            e.preventDefault()
            let data = {
                ...authData,
                [e.target.name]: e.target.value,
              };
              setAuthData(data);
            }
        
    const mailRegister = async ()=> {
        if(regOrInit){
            console.log('registro')
        const userInfoFireBase= await signUp(authData.email, authData.password)
            console.log('user-info-firebase: ',userInfoFireBase)
                var newUser = {
                    id: userInfoFireBase.user.uid,
                    name: authData.firstName,
                    lastName: authData.lastName,
                    status: 'Client',
                    mail: userInfoFireBase.user.email,
                    avatar: authData.avatar
                }
                console.log('Nuevo Usuario : ',newUser)
                 dispatch(postUser(newUser))
                 console.log('se ejecuto el post user')
                localStorage.setItem("Sign In", JSON.stringify(newUser));
                dispatch(setUserInit())
                alert('Successfully registered')
                navigate('/')
            } else {
                console.log('inicio de sesion')
                const result = await signInWithEmailAndPassword (auth, authData.email, authData.password); 
                console.log('RESPUESTA FIREBASE',result)
                const sesionUserFound = users.filter(e=>e.mail=== result.user.email)
                const firstElement = sesionUserFound.shift()
                console.log('sesion user found',firstElement)
                localStorage.setItem("Sign In", JSON.stringify(firstElement));
                localStorage.setItem("usuario-creado", JSON.stringify(firstElement)); 
                dispatch(setUserInit()) 
                navigate('/')
            }
                
    }
    return (
      <div className="signin-page">
        <div className="signin-card-wrapper">
          {!regOrInit && <h1>Log In</h1>} {regOrInit && <h1>Sign up</h1>}
          {/*  }
                // REGISTRARSE CON MAIL 
                {  */}
          <form onSubmit={handleSubmit}>
            {regOrInit && (
              <>
                <div className="form-reg-input">
                  <label>First name:</label>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First name..."
                    value={authData.firstName}
                    onChange={handleChange}
                    className="inp-form-reg"
                  />

                  <label>Last name:</label>
                  <input
                    type="text"
                    placeholder="Last name..."
                    value={authData.lastName}
                    name="lastName"
                    onChange={handleChange}
                    className="inp-form-reg"
                  />
                </div>
              </>
            )}
            <>
              <div className="form-reg-input">
                <label>E-mail:</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Mail..."
                  value={authData.email}
                  onChange={handleChange}
                  className="inp-form-reg"
                />

                <label>Password:</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password..."
                  value={authData.password}
                  onChange={handleChange}
                  className="inp-form-reg"
                />
              </div>
            </>
            {regOrInit && (
              <>
                <div className="form-reg-input">
                  <label>Repeat password:</label>
                  <input
                    name="repeatpassword"
                    type="password"
                    placeholder="Password..."
                    value={authData.repeatpassword}
                    onChange={handleChange}
                    className="inp-form-reg"
                  />
                  <label>Avatar:</label>
                  <input
                    name="avatar"
                    type="field"
                    placeholder="Image..."
                    value={authData.avatar}
                    onChange={handleChange}
                    className="inp-form-reg"
                  />
                </div>
              </>
            )}
            <button type="submit" className="form-reg-init-btn">
              {`${regOrInit ? "Sign up" : "Log In"}`}
            </button>
            <button className="form-reg-init-btn" onClick={googleRegister}>
              <spam className="with">With google</spam> <BsGoogle />
            </button>
            <ToastContainer/>
          </form>
          {/*  }
                // INICIAR O REGISTRARSE CON GOOGLE 
                {  */}
          {usuario?.user?.displayName && (
            <div className="signin-info-user">
              <img
                src={
                  usuario?.user?.photoURL ? usuario?.user.photoURL : "imagen"
                }
                className="signin-img-user"
              />
              <p>{usuario?.user.displayName}</p>
            </div>
          )}
          <button
            onClick={() => setregOrInit(!regOrInit)}
            className="reg-init-btn"
          >
            {regOrInit ? (
              <p>Do you already have an account ? Log in here</p>
            ) : (
              <p>You do not have an account? Sign up here</p>
            )}
          </button>
        </div>
      </div>
    );
}

export default SignIn;