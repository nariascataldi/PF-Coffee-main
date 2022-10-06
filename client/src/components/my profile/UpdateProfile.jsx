import React from "react";
import { VscAccount } from "react-icons/vsc"
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { clearCloudinaryResponse, postCloudinaryPhoto, putUser, getUserDetail } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { Container, FormGroup, Input, Modal } from 'reactstrap'
import style from '../../styles/UserCreate.module.css'
import { Link, useParams } from "react-router-dom";
import { useModal } from "../../hooks/UseModal";
import { ToastContainer, toast } from "react-toastify";
import DatePicker from 'react-datepicker';
import Profile from "./Profile";
import sty from '../../styles/Admin/ProductCreate.module.css'
import imagen from './Profile.module.css'


const FormModifyProfile = (props) => {
    const dispatch= useDispatch();
    const navigate= useNavigate();
    const [birthday, setBirthday] = useState(new Date());
    const [isOpenModal, openModal, closeModal] = useModal(false)
    let responseCloudinary = useSelector(state => state.responseCloudinary)
    let userInit = useSelector(state => state.userInit)
    console.log("img: ", userInit.avatra)
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState('');
    
    const { register, handleSubmit, formState:{errors}} = useForm({
    });
    /////
    ///const { id } = useParams();

    useEffect(() => {
        dispatch(getUserDetail(userInit.id))
    }, [dispatch])

      const { userDetail } = useSelector((state)=>state);
    console.log('El detalle de user es: ', userDetail)
    /**/
    const onSubmit = async (data,e) => {
        await openModal()
    }

    const handleClickYesNo = (data, e) => {
        if(e.target.value) {
            dispatch(putUser({...data, avatar: responseCloudinary.secure_url}, userInit.id));
          
            toast("Correctly modify", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            navigate('/profileUser')
            closeModal()
        }else {closeModal()}
    }

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'Provider');
        //setLoading(true);
        await dispatch(postCloudinaryPhoto(data))
        //setImage(responseCloudinary.secure_url)
        //setLoading(false)
    }
{/*FiUser */}
    return (
    <div>
        <div>
            <Profile></Profile>
        </div>

        <div>
            <Modal className={sty.conteimodal} isOpen={isOpenModal} closeModal={closeModal}>
                <h1 className={sty.h1modal} >Modify User</h1>
                <div className={sty.buttonModal}>
                    <button value='yes' onClick={handleSubmit(handleClickYesNo)} id={sty.submit}>Yes</button>
                    <button value='no' onClick={handleSubmit(handleClickYesNo)} id={sty.submit}>No</button>
                </div>
            </Modal>

            
            <h3 className={sty.title}>User Modify </h3>
            <hr/>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div >
                <label className={sty.title} min-width="300px">Name: </label>
                <input className={imagen.laima} type="text" defaultValue={userDetail.name}{...register('name',{
                    required: true
                })}/>
                
                {errors.name?.type === 'required' && <p>name is required</p>}
                </div>
                <br/>
                <div>
                <label className={sty.title}>Last Name: </label>
                <input className={imagen.laima} type="text" defaultValue={userDetail.lastName}{...register('lastName',{
                    required: true
                })}/>
                
                {errors.name?.type === 'required' && <p>name is required</p>}
                </div>

                <br/>

                <div>
                
                
                <label className={sty.title}>Avatar: </label>
                <FormGroup>
                        <Input
                            className={imagen.laima}
                            type="file"
                            name="file"
                            placeholder="📷 avatar"
                            onChange={uploadImage}
                        />
                </FormGroup>
                       
                </div>
                <br/>
                <div>
            <label className={sty.title}>Birthday: </label>
            <input type="date"  className={imagen.laima}{...register("birthday", {
                valueAsDate: false
                })}/>
          </div>

                <br/>
                <div>
                <button id={sty.submit} type="submit" value="Save">Save</button>
                <Link to="/" ><button id={sty.submit}>Cancel</button></Link>
                </div>
            </form>
            </div>
            <div>
                {
                    !responseCloudinary ? null : (
                        <img src={responseCloudinary.secure_url}/>
                        
                    )
                    
                }
                {
                    console.log("asafadfafa: ", responseCloudinary.secure_url)
                }
            </div>
        </div>
    </div>
    )

}
/*
className={sty.form_control}
dateFormat="dd/mm/yyyy"
              isClearable
              showYearDropdown
              scrollableYearDropdown
                maxDate={new Date()}
                <DatePicker
             defaultValue="28/08/1991"
              selected={birthday}
              onChange={(date) => setBirthday(date)}
              placeholderText="dd/mm/yyyy"
              
            />
*/
export default FormModifyProfile;