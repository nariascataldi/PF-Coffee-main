import React from "react";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { clearCloudinaryResponse, postCloudinaryPhoto, postProviders, getProviderDetail, putProviders } from "../../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { Container, FormGroup, Input } from 'reactstrap'
//import style from './ProviderCreate.module.css'
import { Link, useParams } from "react-router-dom";


const FormModifyProvider = (props) => {
    const dispatch= useDispatch();
    const navigate= useNavigate();
    let responseCloudinary = useSelector(state => state.responseCloudinary)
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState('');
    
    const { register, handleSubmit, formState:{errors}} = useForm({
        /*defaultValues:{
            name: '',
            mail: '',
            adress: '',
            phone: '',
            CUIT: ''
        }*/
    });
    /////
    const { id } = useParams();

    useEffect(() => {
        dispatch(getProviderDetail(id));
        //dispatch(getClean());
    }, [dispatch])


    const { providerDetail } = useSelector((state)=>state);
    console.log('El detalle de provider es: ', providerDetail)
    /**/
    const onSubmit = (data,e) => {
        console.log(data);
        dispatch(putProviders(data, id));
        e.preventDefault();
        e.target.reset();
        alert('Correctly modify')
       navigate('/list')
    }

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'Provider');
        setLoading(true);
        await dispatch(postCloudinaryPhoto(data))
        setImage(responseCloudinary.secure_url)
        setLoading(false)
    }
{/* */}
    return (
        <div>
            <h2>Provider Modify </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                <label>Name: </label>
                <input type="text" defaultValue={ providerDetail.name}{...register('name',{
                    required: true
                })}/>
                
                {errors.name?.type === 'required' && <p>name is required</p>}
                </div>
                <div>
                <label>E-mail: </label>
                <input type="mail" defaultValue={ providerDetail.mail}{...register('mail',{
                    required:true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                })}/>
                
                 {errors.mail?.type === 'required' && <p>e-mail is required</p>}
                 {errors.mail?.type === 'pattern' && <p>formato incorrecto</p>}
                </div>
                <div>
                <label>Adress: </label>
                <input type="text" defaultValue={ providerDetail.adress}{...register('adress', {
                    required:true
                })}/>
                
                 {errors.adress?.type === 'required' && <p>adress is required</p>}
                </div>
                <div>
                <label>Logo: </label>
                <Container>
                    <p>Uploading images</p>
                    <FormGroup >
                        <Input 
                            type="file"
                            name="file"
                            placeholder="Logo"
                            onChange={uploadImage}
                            

                        />
                    </FormGroup>
                    
                </Container>
                
                </div>
                <div>
                <label>Phone: </label>
                <input type="number" defaultValue={ providerDetail.phone}{...register('phone',{
                    required:true
                })}/>
               
                 {errors.phone?.type === 'required' && <p>phone is required</p>}
                </div>
                <div>
                <label>CUIT: </label>
                <input type="number" defaultValue={ providerDetail.CUIT}{...register('CUIT',{
                    required:true
                })}/>
                
                 {errors.CUIT?.type === 'required' && <p>CUIT is required</p>}
                </div>
                <div>
                    <label>Status: </label>
                    <select {...register('disable', {
                    required:true
                })}>
                        <option disabled>Status: {providerDetail.disable === true ? "Inactive":"Asset"}</option>
                        <option value={false} >Asset</option>
                        <option value={true} >Inactive</option>    
                    </select>
                </div>
                <input type="submit" value="Save"/>
                <Link to="/list"><button>Cancel</button></Link>

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
export default FormModifyProvider;