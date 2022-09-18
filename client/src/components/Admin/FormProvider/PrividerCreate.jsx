import React from "react";
import { useForm } from "react-hook-form";
import { postProviders } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'




const FormProvider = () => {
    const dispatch= useDispatch();
    const navigate= useNavigate();
    const { register, handleSubmit, formState:{errors}} = useForm({
        defaultValues:{
            name: 'your name',
            mail: 'your@mail.com',
            adress: 'your adress',
            phone: '11111111',
            CUIT: '22222222'
        }
    });

    const onSubmit = (data,e) => {
        console.log(data);
        dispatch(postProviders(data));
        e.preventDefault();
        e.target.reset();
        alert('Correctly created')
        navigate('/home')
    }
    return (
        <div>
            <h2>Provider</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                <label>Name: </label>
                <input type="text" {...register('name',{
                    required: true
                })}/>
                {errors.name?.type === 'required' && <p>name is required</p>}
                </div>
                <div>
                <label>E-mail: </label>
                <input type="mail" {...register('mail',{
                    required:true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                })}/>
                 {errors.mail?.type === 'required' && <p>e-mail is required</p>}
                 {errors.mail?.type === 'pattern' && <p>formato incorrecto</p>}
                </div>
                <div>
                <label>Adress: </label>
                <input type="text" {...register('adress', {
                    required:true
                })}/>
                 {errors.adress?.type === 'required' && <p>adress is required</p>}
                </div>
                <div>
                <label>Logo: </label>
                <input type="text" {...register('logo')}/>
                </div>
                <div>
                <label>Phone: </label>
                <input type="number" {...register('phone',{
                    required:true
                })}/>
                 {errors.phone?.type === 'required' && <p>phone is required</p>}
                </div>
                <div>
                <label>CUIT: </label>
                <input type="number" {...register('CUIT',{
                    required:true
                })}/>
                 {errors.CUIT?.type === 'required' && <p>CUIT is required</p>}
                </div>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}
export default FormProvider;