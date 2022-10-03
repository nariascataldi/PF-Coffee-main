import React, { useEffect, useState } from "react";
import { auth, signWithGoogle } from "../../firebase";
import { getAllUsers, postUser, setUserInit } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import './SignIn.css'
import { useNavigate } from "react-router";

// import CardInfomativaFormulario from "../../Components/Organisms/CardInformativaFormulario/CardInformativaFormulario";


const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState([])
    const [regOrInit , setregOrInit] = useState(false)
    useEffect(()=>{
        getAllUsers()
    },[])
    const googleRegister = async () => {
        
    const userInfo= await signWithGoogle()
        setUsuario(userInfo);
            var newUser = {
                id: userInfo.user.uid,
                name: userInfo._tokenResponse.firstName,
                lastName: userInfo._tokenResponse.lastName,
                status: 'Admin',
                mail: userInfo.user.email,
                avatar: userInfo.user.photoURL,
                
            }
            dispatch(postUser(newUser))
            localStorage.setItem("Sign In", JSON.stringify(userInfo));
            dispatch(setUserInit())
            navigate('/')

    }
    return (
        <div className='signin-page'>
            <div className='signin-card-wrapper'>
                { regOrInit === false ? <h1>Log In</h1> : <h1>Register</h1> }
                <button className='pay-btn-cart' onClick={googleRegister}>{`${regOrInit=== false ?
                 'Login with Google' : 'Register with Google' }`}</button>
                {usuario?.user?.displayName &&
                    <div className='signin-info-user'>
                        <img src={usuario?.user?.photoURL ? usuario?.user.photoURL : 'imagen'} className='signin-img-user' />
                        <p>{usuario?.user.displayName}</p>
                    </div>
                    }
                {regOrInit === false ? <p>You do not have an account? Sign up</p> :
                    <p>Do you already have an account ? log in</p>
                    }    

            </div>

        </div>
    )
}

export default SignIn;