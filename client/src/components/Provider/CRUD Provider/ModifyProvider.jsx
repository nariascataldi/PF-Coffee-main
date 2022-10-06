import React from "react";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { clearCloudinaryResponse, postCloudinaryPhoto, postProviders, getProviderDetail, putProviders } from "../../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { Container, FormGroup, Input, Modal } from 'reactstrap'

import { Link, useParams } from "react-router-dom";
import { useModal } from "../../../hooks/UseModal";
import { ToastContainer, toast } from "react-toastify";

import Figure from 'react-bootstrap/Figure';
import logo from '../../../assets/logo_coffee.png';
import NavBarAdmin from '../../../components/Admin/NavBarAdmin/NavBarAdmin';

import style from '../../../styles/Admin/ModifyProduct.module.css';
import sty from '../../../styles/Admin/ProductCreate.module.css'


const FormModifyProvider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpenModal, openModal, closeModal] = useModal(false)
  let responseCloudinary = useSelector(state => state.responseCloudinary)
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm({
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


  const { providerDetail } = useSelector((state) => state);
  console.log('El detalle de provider es: ', providerDetail)
  /**/
  const onSubmit = async () => {
    await openModal()
  }

  const handleClickYesNo = (data, e) => {
    if (e.target.value) {
      dispatch(putProviders({ ...data, logo: responseCloudinary.url }, id));

      toast("Correctly modify", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      navigate('/homeAdmin')
      closeModal()
    } else { closeModal() }
  }

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'Provider');
    await dispatch(postCloudinaryPhoto(data))
  }
  {/* */ }
  return (
    <div>
      {/* ---------Navbar y Modal -----------------*/}
      <Modal className={sty.conteimodal} isOpen={isOpenModal} closeModal={closeModal}>
        <h1 className={sty.h1modal}>Modify Provider</h1>
        <div className={sty.buttonModal}>
          <button className={style.botonesformC} value='yes' onClick={handleSubmit(handleClickYesNo)} id={sty.submit}>Yes</button>
          <button className={style.botonesformC} value='no' onClick={handleSubmit(handleClickYesNo)} id={sty.submit}>No</button>
        </div>
      </Modal>
      <NavBarAdmin />
      <div className={style.figpos}>
        <Figure>
          <Figure.Image className={style.figulog} width={17 * 5} height={18 * 5} alt="El Logo" src={logo} />
        </Figure>
      </div>
      {/* ---------------------------------------------- */}
      {/* <h3 className="display-5">Provider Modify </h3> */}
      <div className={style.container} >
        <form className={style.containerform} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.titleformprov}>
            <label className={style.labelgroup} >Name: </label>
            <input className={style.inputlarge} type="text" defaultValue={providerDetail.name}{...register('name', {
              required: true
            })} />
            {errors.name?.type === 'required' && <p className={style.perror} >name is required</p>}
          </div>
          <div className={style.titleformprov}>
            <div>
              <label className={style.labelgroup} >E-mail: </label>
              <input className={style.inputlarge} type="mail" defaultValue={providerDetail.mail}{...register('mail', {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
              })} />

              {errors.mail?.type === 'required' && <p className={style.perror} >e-mail is required</p>}
              {errors.mail?.type === 'pattern' && <p className={style.perror} >formato incorrecto</p>}
            </div>
          </div>
          <div className={style.titleformprov}>
            <div>
              <label className={style.labelgroup} >Adress: </label>
              <input className={style.inputlarge} type="text" defaultValue={providerDetail.adress}{...register('adress', {
                required: true
              })} />

              {errors.adress?.type === 'required' && <p className={style.perror} >adress is required</p>}
            </div>
          </div>
          {/*  contenedor logo phone cuit status */}
          <div className={style.logophoncuitstatus}>
            <div>
              <label className={style.labelgroup} >Logo: </label>
              <input
                className={style.inputmedium}
                type="file"
                name="file"
                placeholder="Logo"
                onChange={uploadImage}
                id="inputGroupFile01"
              />
            </div>

            <div className={style.phonecuitstatus}>
              <div>
                <label className={style.labelgroup} >Phone: </label>
                <input className={style.inputsmallprov} type="number" defaultValue={providerDetail.phone}{...register('phone', {
                  required: true
                })} />

                {errors.phone?.type === 'required' && <p className={style.perror} >phone is required</p>}
              </div>

              <div>
                <label className={style.labelgroup} >CUIT: </label>
                <input className={style.inputsmallprov} type="number" defaultValue={providerDetail.CUIT}{...register('CUIT', {
                  required: true
                })} />

                {errors.CUIT?.type === 'required' && <p className={style.perror} >CUIT is required</p>}
              </div>

              <div>
                <label className={style.labelgroup} >Status: </label>
                <select className={style.inputsmallprov} id="inputGroup-sizing-lg"{...register('disable', {
                  required: true
                })}>
                  <option disabled>Status: {providerDetail.disable === true ? "Inactive" : "Asset"}</option>
                  <option value={false} >Asset</option>
                  <option value={true} >Inactive</option>
                </select>
              </div>
            </div>
          </div>

          <div className={style.botones}>

            <input type="submit" value="Save" className={style.botonesform} />
            <Link to="/homeAdmin" ><button className={style.botonesform}>Cancel</button></Link>

          </div>
        </form>
      </div>
    </div>
  )
}
export default FormModifyProvider;