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
      dispatch(putProviders({...data, logo: responseCloudinary.url}, id));

      toast("Correctly modify", {
        position: "top-right",
        autoClose: 5000,
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
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <h1>Modify Provider</h1>
        <div class="d-flex justify-content-evenly">
          <button value='yes' onClick={handleSubmit(handleClickYesNo)} class='border-0'>Yes</button>
          <button value='no' onClick={handleSubmit(handleClickYesNo)} class='border-0'>No</button>
        </div>
      </Modal>
      <NavBarAdmin />
      <div className={style.figpos}>
        <Figure>
          <Figure.Image className={style.figulog} width={17 * 5} height={18 * 5} alt="El Logo" src={logo} />
        </Figure>
      </div>
      <h3 className="display-5">Provider Modify </h3>
      <hr />
      <div className={style.container} >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.titleform}>
            <div className="input-group input-group-lg">
              <label className="input-group-text btn btn-lg btn-primary" id="inputGroup-sizing-lg">Name: </label>
              <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" type="text" defaultValue={providerDetail.name}{...register('name', {
                required: true
              })} />

              {errors.name?.type === 'required' && <p>name is required</p>}
            </div>
          </div>
          <div className={style.titleform}>
            <div className="input-group input-group-lg">
              <label className="input-group-text btn btn-lg btn-primary" id="inputGroup-sizing-lg">E-mail: </label>
              <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" type="mail" defaultValue={providerDetail.mail}{...register('mail', {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
              })} />

              {errors.mail?.type === 'required' && <p>e-mail is required</p>}
              {errors.mail?.type === 'pattern' && <p>formato incorrecto</p>}
            </div>
          </div>
          <div className={style.titleform}>
            <div className="input-group input-group-lg">
              <label className="input-group-text btn btn-lg btn-primary" id="inputGroup-sizing-lg">Adress: </label>
              <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" type="text" defaultValue={providerDetail.adress}{...register('adress', {
                required: true
              })} />

              {errors.adress?.type === 'required' && <p>adress is required</p>}
            </div>
          </div>
          {/*  contenedor logo phone cuit status */}
          <div className={style.logophoncuitstatus}>
            <div className="input-group input-group-lg">
              <label className="input-group-text btn btn-lg btn-primary" id="inputGroup-sizing-lg">Logo: </label>

              <input
                type="file"
                name="file"
                placeholder="Logo"
                onChange={uploadImage}
                className="form-control"
                id="inputGroupFile01"
              />


            </div>

            <div className={style.phonecuitstatus}>
              <div className="input-group input-group-lg">
                <label className="input-group-text btn btn-lg btn-primary" id="inputGroup-sizing-lg">Phone: </label>
                <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" type="number" defaultValue={providerDetail.phone}{...register('phone', {
                  required: true
                })} />

                {errors.phone?.type === 'required' && <p>phone is required</p>}
              </div>

              <div className="input-group input-group-lg">
                <label className="input-group-text btn btn-lg btn-primary" id="inputGroup-sizing-lg">CUIT: </label>
                <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" type="number" defaultValue={providerDetail.CUIT}{...register('CUIT', {
                  required: true
                })} />

                {errors.CUIT?.type === 'required' && <p>CUIT is required</p>}
              </div>

              <div className="input-group input-group-lg">
                <label className="input-group-text btn btn-lg btn-primary" id="inputGroup-sizing-lg">Status: </label>
                <select className="form-select" id="inputGroup-sizing-lg"{...register('disable', {
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