import React from "react";
import ButtonXartiago from "../Atoms/ButtonXartiago";


const CardInfomativaFormulario = () => {
    return(
        <div className="flex flex-col items-center justify-center h-full bg-gray-800 shadow-xl">
            <p>"Bienvenid@"</p>
            <p>"Inicia sesión y solicita o publica un servicio en tan sólo unos minutos" </p>
            <div className="text-center flex flex-col mb-4">
                <h2 className="font-semibold text-white">¿No tienes cuenta?</h2>
            </div>
            <ButtonXartiago
                btn=" Regístrate"
                page="signup"
                btnClass="flex justify-center font-semibold inline-flex w-32 text-lg px-4 py-2 bg-green-700 text-gray-50 hover:bg-green-800 active:bg-green-600 rounded-md transition-all ease-in-out duration-300"
            />
        </div>
    )
}

export default CardInfomativaFormulario;