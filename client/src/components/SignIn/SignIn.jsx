import React, { useEffect, useState } from "react";
import { auth, signWithGoogle } from "../../firebase";
import { postUser } from "../../redux/actions";
import './SignIn.css'

// import CardInfomativaFormulario from "../../Components/Organisms/CardInformativaFormulario/CardInformativaFormulario";


const SignIn = () => {
    const [user, setUser] = useState([])
    const googleRegister = async () => {
        await signWithGoogle().then((response) => {
            setUser(response.user);
            console.log('response Name', response.user.displayName);
            console.log('response ', response);
            localStorage.setItem("Sign In", JSON.stringify(user));
            // console.log('usuario ',user)
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
                {user?.displayName &&
                    <div className='signin-info-user'>
                        <img src={user?.photoURL ? user.photoURL : 'imagen'} className='signin-img-user' />
                        <p>{user.displayName}</p>
                    </div>

                }

            </div>

        </div>
    )
}

export default SignIn;