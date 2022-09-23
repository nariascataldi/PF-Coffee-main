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

    let [input, setInput] = useState({
        name: '',
        mail: '',
        logo: '',
        adress: '',
        phone: '',
        CUIT: ''
    })

    let [errors, setErrors] = useState({
        name: '',
        mail: '',
        logo: '',
        adress: '',
        phone: '',
        CUIT: ''
    })

    React.useEffect(() => {
        console.log(input)
    },[input])

    React.useEffect(async () => {
        await setInput({
            ...input,
            logo: responseCloudinary.url,
        })
    },[errors])

    let formValidate = (value) => {
        let errors = {}
    
        if (!value.name) errors.name = 'Name is required'
        else if(!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(value.name)) errors.name = 'Name is invalid'
    
        if(!value.mail) errors.mail = 'Mail is required'
        else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value.mail)) errors.mail = 'Mail is invalid'
    
        if(!value.adress) errors.adress = 'Adress is required'
        if(!value.phone) errors.phone = 'Phone is required'
        if(!value.CUIT) errors.CUIT = 'CUIT is required'
    
        return errors
    } 
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        await dispatch(postProviders(input));
        alert('Correctly created')
    }

    let handleChange = async (e) => {
        await setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        await setErrors(formValidate({
            ...input,
            [e.target.name]: e.target.value
        }))
}

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'Provider');
        setLoading(true);
        await dispatch(postCloudinaryPhoto(data))
        setLoading(false)
    }


    return (
        <div>
            <h2>Provider</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                <label>Name: </label>
                <input type="text" name='name' value={input.name} onChange={(e) => handleChange(e)}/>
                    {errors.name?.type === 'required' && <p>name is required</p>}
                </div>
                <div>
                <label>E-mail: </label>
                <input type="mail" name='mail' value={input.mail} onChange={(e) => handleChange(e)}/>
                    {errors.mail?.type === 'required' && <p>e-mail is required</p>}
                    {errors.mail?.type === 'pattern' && <p>formato incorrecto</p>}
                </div>
                <div>
                <label>Adress: </label>
                <input type="text" name='adress' value={input.adress} onChange={(e) => handleChange(e)}/>
                    {errors.adress?.type === 'required' && <p>adress is required</p>}
                </div>
                <div>
                <label>Logo: </label>
                <Container className={style.containerImg}>
                    <p>Subiendo imagenes</p>
                    <FormGroup className={style.formGroup}>
                        <Input 
                            type="file"
                            name="file"
                            placeholder="Logo"
                            onChange={(e) => uploadImage(e)}
                            className={style.inputProvider}
                        />
                    </FormGroup>
                </Container>
                </div>
                <div>
                <label>Phone: </label>
                <input type="number" name='phone' value={input.phone} onChange={(e) => handleChange(e)}/>
                    {errors.phone?.type === 'required' && <p>phone is required</p>}
                </div>
                <div>
                <label>CUIT: </label>
                <input type="number" name='CUIT' value={input.CUIT} onChange={(e) => handleChange(e)}/>
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