import React, { useEffect, useState } from "react";
import { auth, signWithGoogle } from "../../firebase";
import { postUser } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import './SignIn.css'

// import CardInfomativaFormulario from "../../Components/Organisms/CardInformativaFormulario/CardInformativaFormulario";


const SignIn = () => {
    const dispatch = useDispatch();
    const [usuario, setUsuario] = useState([])
    const googleRegister = async () => {
        await signWithGoogle().then((response) => {
            setUsuario(response && response);
            console.log('response Name', response.user.displayName);
            console.log('response ', response);
            console.log('response Token ', response._tokenResponse.firstName);
            var newUser = {
                id: response.user.uid,
                name: response._tokenResponse.firstName,
                lastName: response._tokenResponse.lastName,
                mail: response.user.email,
                avatar: response.user.photoURL,
            }
            dispatch(postUser(newUser))
            localStorage.setItem("Sign In", JSON.stringify(usuario));
        })

        // var newUser ={
        //     mail: response.user.email,
        //     name: response.user.displayName,
        //     lastName: '',
        //     phone: response.user.phoneNumber,
        //     avatar: response.user.photoURL,


        // }
        // console.log('usuario ',user)
        // postUser(newUser)

    }
    return (
        <div className='signin-page'>
            <div className='signin-card-wrapper'>
                <h1>Inicio de sesión</h1>
                <button className='pay-btn-cart' onClick={googleRegister}>Iniciar con Google</button>
                {usuario?.user?.displayName &&
                    <div className='signin-info-user'>
                        <img src={usuario?.user?.photoURL ? usuario?.user.photoURL : 'imagen'} className='signin-img-user' />
                        <p>{usuario?.user.displayName}</p>
                    </div>

                }

            </div>

        </div>
    )
}

export default SignIn;