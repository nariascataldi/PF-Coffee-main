import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { clearCloudinaryResponse, postCloudinaryPhoto, postProviders } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { Container, FormGroup, Input } from 'reactstrap'
import style from './ProviderCreate.module.css'
import axios from "axios";
import { useEffect } from "react";


const FormProvider = () => {
    const dispatch= useDispatch();
    const navigate= useNavigate();
    let responseCloudinary = useSelector(state => state.responseCloudinary)
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState('');

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

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'Provider');
        setLoading(true);
        // const res = await fetch(
        //     'https://api.cloudinary.com/v1_1/drcjpfj7t/image/upload/',
        //     {
        //         method: 'POST',
        //         body: data
        //     }
        // )
        // const file = await res.json();
        // console.log(res)
        await dispatch(postCloudinaryPhoto(data))
        setImage(responseCloudinary.secure_url)
        setLoading(false)
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
                <Container>
                    <p>Subiendo imagenes</p>
                    <FormGroup className={style.formGroup}>
                        <Input 
                            type="file"
                            name="file"
                            placeholder="Logo"
                            onChange={uploadImage}
                            className={style.inputProvider}
                        />
                    </FormGroup>
                </Container>
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
            <div>
                {
                    !responseCloudinary ? null : (
                        <img src={responseCloudinary.secure_url}/>
                    )
                }
            </div>
        </div>
    )
}
export default FormProvider;