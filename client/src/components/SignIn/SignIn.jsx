import React, { useEffect, useState } from "react";
import { signWithGoogle} from "../../firebase";
import { auth, signUp} from "../../firebase/index"
import {signInWithEmailAndPassword} from "firebase/auth"
import { getAllUsers, postNodemailer, postUser, setUserInit } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { BsGoogle } from "react-icons/bs";
//createUserWithEmailAndPassword
import './SignIn.css'
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
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
                var newUser = {
                    id: userInfo.user.uid,
                    name: userInfo._tokenResponse.firstName,
                    lastName: userInfo._tokenResponse.lastName,
                    status: 'Admin',
                    mail: userInfo.user.email,
                    avatar: userInfo.user.photoURL,
                
                }
                const response = await postUser(newUser)
                dispatch(setUserInit(response.data))
                localStorage.setItem("Sign In", JSON.stringify(response.data));
                localStorage.setItem("usuario-creado", JSON.stringify(response.data));
                navigate('/')
    }
//////////// registro con mail //////////////
    
        const handleSubmit = (e) => {
            e.preventDefault();
            // let findMailExist = users.filter(e=>e.mail=== authData.email)
            // console.log('usuario existente',findMailExist)
            
            if(authData.password !==authData.repeatpassword && regOrInit){
              return  toast('Passwords do not match', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            // }if ( findMailExist === authData.email || regOrInit){
            //     return  alert('This email has already been registered before! Try another !')
                        
            }if(authData.firstName ==='' || authData.lastName===''){
                return  toast('Complete name and password !', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
            } 
            if(authData.email === '' ||authData.password === '' ){
                return toast('Password and email are required !', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
            }  else {
              mailRegister();
               
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
            try{
                console.log('registro')
        const userInfoFireBase= await signUp(authData.email, authData.password)
            console.log('user-info-firebase: ',userInfoFireBase)
            console.log(authData)
                var newUser = {
                    id: userInfoFireBase.user.uid,
                    name: authData.firstName,
                    lastName: authData.lastName,
                    status: 'Client',
                    mail: userInfoFireBase.user.email,
                    avatar: authData.avatar
                }
                const response = await postUser(newUser)
                console.log('response',response)
                dispatch(setUserInit(response.data))
                localStorage.setItem("Sign In", JSON.stringify(response.data));
                localStorage.setItem("usuario-creado", JSON.stringify(response.data));
                await postNodemailer(newUser.mail);
                toast("Welcome email sent! 🧁", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                
                toast('Successfully registered', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                  setTimeout(() => {
                    navigate('/')
                }, 5000);
                  
            }catch(error){
                toast((error.message), {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
            }
            
                
            } else {
                
                try{
                    console.log('inicio de sesion')
                const result = await signInWithEmailAndPassword (auth , authData.email, authData.password); 
                console.log('RESPUESTA FIREBASE',result)
                const sesionUserFound = users.filter(e=>e.mail=== result.user.email)
                const firstElement = sesionUserFound.shift()
                console.log('sesion user found',firstElement)
                localStorage.setItem("Sign In", JSON.stringify(firstElement));
                localStorage.setItem("usuario-creado", JSON.stringify(firstElement)); 
                dispatch(setUserInit(firstElement)) 
                navigate('/')
                }catch(error){
                    alert(error.message)
                }
            }
                
    }
    return (
        <div className='signin-page'>
            <div className='signin-card-wrapper'>
                { !regOrInit && <h1>Log In</h1> } { regOrInit && <h1>Sign up</h1> }


            {/*  }
                // REGISTRARSE CON MAIL 
                {  */}
                <form onSubmit={handleSubmit}>
                    { regOrInit &&
                    <>
                    <div className='form-reg-input'>
                    <label>First name:</label>
                    <input name="firstName"
                    type="text"
                    placeholder="First name..."
                    value={authData.firstName}
                    onChange={handleChange}
                    className='inp-form-reg'
                    />

                    <label>Last name:</label>
                    <input 
                    type="text"
                    placeholder="Last name..."
                    value={authData.lastName}
                    name='lastName'
                    onChange={handleChange}
                    className='inp-form-reg'
                    />
                    </div>
                    </>
                    }   
                    <>
                    <div className='form-reg-input'>
                    <label>E-mail:</label>
                    <input name="email"
                    type="email"
                    placeholder="Mail..."
                    value={authData.email}
                    onChange={handleChange}
                    className='inp-form-reg'
                    />

                    <label>Password:</label>
                    <input name="password"
                    type="password"
                    placeholder="Password..."
                    value={authData.password}
                    onChange={handleChange}
                    className='inp-form-reg'
                    />
                    </div>
                    </>
                    
                    { regOrInit &&
                    <>   
                    <div className='form-reg-input'>
                    <label>Repeat password:</label>
                    <input name="repeatpassword"
                    type="password"
                    placeholder="Password..."
                    value={authData.repeatpassword}
                    onChange={handleChange}
                    className='inp-form-reg'
                    />
                    <label>Avatar:</label>
                    <input name="avatar"
                    type="field"
                    placeholder="Image..."
                    value={authData.avatar}
                    onChange={handleChange}
                    className='inp-form-reg'
                    />
                    </div>
                    </>
                    }
                    

                    <button type="submit" className='form-reg-init-btn'>
                        {`${regOrInit ? 'Sign up' : 'Log In'}`}</button> 
                        <ToastContainer />
                </form>
                <div>
                <Link to='/' className='decoration-linkk'>
                <button className='form-reg-init-btn1'>
                    <span className='with'>Back to Home</span> 
                </button> </Link>
                <button className='form-reg-init-btn' onClick={googleRegister}>
                    <span className='with'>With google</span> <BsGoogle/>
                </button>
                </div>
                



                {/*  }
                // INICIAR O REGISTRARSE CON GOOGLE 
                {  */}
                
                {/* {usuario?.user?.displayName &&
                    <div className='signin-info-user'>
                        <img src={usuario?.user?.photoURL ? usuario?.user.photoURL : 'imagen'} className='signin-img-user' />
                        <p>{usuario?.user.displayName}</p>
                    </div>
                    } */}
                <button onClick={()=>setregOrInit(!regOrInit)} className='reg-init-btn'>
                {regOrInit? <p>Do you already have an account ? Log in here</p> :
                    <p>You do not have an account? Sign up here</p>
                    }    
                </button>
            </div>

        </div>
    )
}

export default SignIn;