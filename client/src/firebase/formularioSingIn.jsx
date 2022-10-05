import React, { useEffect, useState } from "react";
// import Encabezado2 from "../../Atoms/Encabezados/Encabezado2";
// import Input from "../../Atoms/Input/Input";
// import Button from "../../Atoms/Button/Button";
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth'
import { useNavigate } from "react-router";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import { ImSpinner9 } from "react-icons/im";
// import SeparadorO from "../../Atoms/SeparadorO/SeparadorO";
// import Swal from 'sweetalert2';
// import SignInWithSocial from "../../Molecules/SignInWithSocial/SignInWithSocial";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";


const FormularioSignIn = ({handleModal}) => {
    const [loading, setLoading] = useState(false)
    const [disabledSignIn, setDisabledSignIn] = useState(true)
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    // Handles
    const handleMailChanges = (text) => {
        setMail(text)
    }
    
    const handlePasswordChanges = (text) => {
        setPassword(text)
    }


    useEffect(() => {
        const emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (emailValid.test(mail) && password.length >= 6) {
            setDisabledSignIn(true)
        } else {
            setDisabledSignIn(false)
        }
    }, [mail, password])


    // Funciones
    const redirectToHome = () => {
        navigate('/home')
    }

    var user;
    const signIn = async (e) => {
        e.preventDefault();
        setLoading(true)
        console.log("hola1")
        const auth = getAuth()
      
        signInWithEmailAndPassword(auth, mail, password)
            .then(userCredential => {
                user = userCredential.user
                localStorage.setItem("datoSesion",JSON.stringify(user))
                setLoading(false)
                if (user.emailVerified) {
                    redirectToHome()
                } else {
                    navigate('/email-verification')
                }
            })
            .catch(error => {
                setLoading(false)
                var errorCode = error.code;
                var errorMessage = error.message;
                let mensaje = ''
                errorMessage.includes("wrong-password") ? mensaje = "Contraseña Incorrecta" : errorMessage.includes("user-not-found") ? mensaje = "No se encontró el usuario" : mensaje = `Hubo un problema vuelve a intentart. Error: ${errorCode}`
                Swal.fire({
                    title: 'Error!',
                    text: mensaje,
                    icon: 'error',
                    confirmButtonText: 'X'
                  })
                console.log(error,errorCode, errorMessage)
            });
    }

    let datosSesionFromLocalStorage = JSON.parse(localStorage.getItem("datoSesion"))
    const cerrarSesion = () =>{
        localStorage.removeItem("datoSesion")
        navigate("/")
    }



    return (
        <div className="items-center">
            {
                datosSesionFromLocalStorage ?
                (<div> 
                    Sesion Iniciada con : {datosSesionFromLocalStorage.email} 
                    <div className="px-4 py-2">
                            <button type="button" onClick={cerrarSesion}>Cerrar Sesión</button>
                    </div>
                    <img src={`${datosSesionFromLocalStorage.photoURL}`} />
                </div>) 
                :
                (<div>
                    <div className="flex w-full justify-end">
                    <button onClick={handleModal} className="font-semibold inline-flex w-15 text-2xl px-3 text-gray-800 rounded-md transition-all ease-in-out duration-300">X</button>
                    </div>
                    <p>"Sign In"</p>
                   

                    <SignInWithSocial afterLogin={redirectToHome} />
                    <form onSubmit={signIn}>
                        <SeparadorO />
                        <Input
                            type="email"
                            id="user_mail"
                            theme="#164E63"
                            label="Email:"
                            placeholder="Ingresa tu Correo"
                            flexed
                            callBack={handleMailChanges}
                        />
                        <Input type="password"
                            id="user_password"
                            theme="#164E63"
                            label="Contraseña:"
                            flexed
                            placeholder="Ingresa tu Contraseña"
                            callBack={handlePasswordChanges}
                        />
                        <div className="px-4 py-2">
                            <Button
                                icon={loading && <ImSpinner9 className="mr-2 animate-spin" />}
                                className="px-4 py-3"
                                submit
                                theme="#155E75"
                                customTextColor="#FFFFF"
                                text={loading ? 'Iniciando sesión...' : 'Ingresar'}
                                full
                                disabled={loading || !disabledSignIn}
                            />
                        </div>
                        <div className="px-4 py-2">
                            <p className="text-gray-500 leading-tight text-sm font-sans">¿Olvidaste tu contraseña? <span className="font-medium">Recuerda</span> que puedes restablecerla en el siguiente enlace:
                                    <span className="font-semibold text-indigo-800 cursor-pointer"><br /><Link to="/passwordReset">Restablecer Contraseña <HiOutlineArrowNarrowRight className="inline-block" /></Link></span></p>
                        </div>
                    </form>
                </div>
            )}
    </div>
)}


export default FormularioSignIn;