import React from "react";
import { VscAccount } from "react-icons/vsc"
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { clearCloudinaryResponse, postCloudinaryPhoto, putUser, getAllUsers, getUserDetail} from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { Container, FormGroup, Input, Modal } from 'reactstrap'
import style from '../../styles/UserCreate.module.css'
import { Link, useParams } from "react-router-dom";
import { useModal } from "../../hooks/UseModal";
import { ToastContainer, toast } from "react-toastify";
import DatePicker from 'react-datepicker';


const FormModifyProvider = (props) => {
    const dispatch= useDispatch();
    const navigate= useNavigate();
    const [birthday, setBirthday] = useState(null);
    const [isOpenModal, openModal, closeModal] = useModal(false)
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
        dispatch(getUserDetail(id));
        //dispatch(getClean());
    }, [dispatch])


    const { userDetail } = useSelector((state)=>state);
    console.log('El detalle de user es: ', userDetail)
    /**/
    const onSubmit = async (data,e) => {
        await openModal()
    }

    const handleClickYesNo = (data, e) => {
        if(e.target.value) {
            dispatch(putUser(data));
          
            toast("Correctly modify", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            navigate('/profileClient')
            closeModal()
        }else {closeModal()}
    }

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'User');
        setLoading(true);
        await dispatch(postCloudinaryPhoto(data))
        setImage(responseCloudinary.secure_url)
        setLoading(false)
    }
{/*FiUser */}
    return (
    <div>

        <div>
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
                <h1>Modify User</h1>
                <div class="d-flex justify-content-evenly">
                    <button value='yes' onClick={handleSubmit(handleClickYesNo)} class='border-0'>Yes</button>
                    <button value='no' onClick={handleSubmit(handleClickYesNo)} class='border-0'>No</button>
                </div>
            </Modal>

            
            <h3 >User Modify </h3>
            <hr/>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div >
                <label >Name: </label>
                <input  type="text" defaultValue={userDetail.name}{...register('name',{
                    required: true
                })}/>
                
                {errors.name?.type === 'required' && <p>name is required</p>}
                </div>
                <br/>
                <div>
                <label>Last Name: </label>
                <input type="text" defaultValue={userDetail.lastName}{...register('lastName',{
                    required: true
                })}/>
                
                {errors.name?.type === 'required' && <p>name is required</p>}
                </div>

                <br/>

                <div>
                <label>Avatar: </label>
            
                        <input
                            type="file"
                            name="file"
                            placeholder="avatar"
                            onChange={uploadImage}
                            
                        />
                </div>
                <br/>
                <div>
            <label>Birthday: </label>
            <DatePicker

              selected={birthday}
              onChange={(date) => setBirthday(date)}
              dateFormat="dd/MM/yyyy"
              isClearable
              showYearDropdown
              scrollableYearDropdown
              placeholderText="dd/mm/yyyy"
              maxDate={new Date()}
            />
          </div>

                <br/>
                <div>
                <button type="submit" value="Save">Save</button>
                <Link to="/profileClient" ><button >Cancel</button></Link>
                </div>
            </form>
            </div>
            <div>
                {
                    !responseCloudinary ? null : (
                        <img src={responseCloudinary.secure_url}/>
                    )
                }
            </div>
        </div>
    </div>
    )
}
export default FormModifyProvider;