import React from "react";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { Modal } from 'reactstrap'
import { Link } from "react-router-dom";

import { useModal } from "../../../hooks/UseModal";
import { postCloudinaryPhoto, postProviders } from "../../../redux/actions/index";
import { ToastContainer, toast } from "react-toastify";

import style from '../../../styles/Admin/ModifyProduct.module.css';
import sty from '../../../styles/Admin/ProductCreate.module.css'


const FormProviderCreate = (props) => {
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

  const handleClickYesNo = (data, e) => {
    if (e.target.value === 'yes') {
      console.log(data);
      dispatch(postProviders({ ...data, logo: responseCloudinary.url }));
      toast("Provider Created", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      navigate('/homeAdmin')
    }
    closeModal()
  }

  const onSubmit = async (data, e) => {

    await openModal()
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
  {/* */ }
  return (
    <div>
      <Modal className={sty.conteimodal} isOpen={isOpenModal} closeModal={closeModal}>
        <h1 className={sty.h1modal}>Create Provider</h1>
        <div className={sty.buttonModal}>
          <button
            className={style.botonesformC}
            value="yes"
            onClick={handleSubmit(handleClickYesNo)}
            id={sty.submit}
          >
            Yes
          </button>
          <ToastContainer />
          <button
            className={style.botonesformC}
            value="no"
            onClick={handleSubmit(handleClickYesNo)}
            id={sty.submit}
          >
            No
          </button>
          <ToastContainer />
        </div>
      </Modal>
      {/* <h3 className="display-5">Provider Create</h3> */}
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className={style.titleformprov}>
          <label className={style.labelgroup} >Name: </label>
          <input className={style.inputlargeC} type="text" {...register('name', {
            required: true
          })} />
          {errors.name?.type === 'required' && <p className={style.perror} >name is required</p>}
        </div>
        <div className={style.titleformprov}>
          <div>
            <label className={style.labelgroup} >E-mail: </label>
            <input className={style.inputlargeC} type="mail" {...register('mail', {
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
            <input className={style.inputlargeC} type="text" {...register('adress', {
              required: true
            })} />

            {errors.adress?.type === 'required' && <p className={style.perror} >adress is required</p>}
          </div>
        </div>
        {/*  contenedor logo phone cuit status */}
        <div className={style.logophoncuitstatus}>
          <div>
            {/* <label className={style.labelgroup} >Logo: </label> */}
            <input
              className={style.inputmediumC}
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
              <input className={style.inputsmallprovC} type="number" {...register('phone', {
                required: true
              })} />

              {errors.phone?.type === 'required' && <p className={style.perror} >phone is required</p>}
            </div>

            <div>
              <label className={style.labelgroup} >CUIT: </label>
              <input className={style.inputsmallprovC} type="number" {...register('CUIT', {
                required: true
              })} />

              {errors.CUIT?.type === 'required' && <p className={style.perror} >CUIT is required</p>}
            </div>

            <div>
              <label className={style.labelgroup} >Status: </label>
              <select className={style.inputsmallprovC} id="inputGroup-sizing-lg"{...register('disable', {
                required: true
              })}>
                <option disabled>Status: </option>
                <option value={false} >Asset</option>
                <option value={true} >Inactive</option>
              </select>
            </div>
          </div>
        </div>

        <div className={style.botones}>

          <input type="submit" value="Save" className={style.botonesformC} />
          <Link to="/homeAdmin" ><button className={style.botonesformC}>Cancel</button></Link>

        </div>
      </form>
    </div>
  );
}
export default FormProviderCreate;

/* <div className="input-group input-group-lg">
            <label
              className="input-group-text btn btn-lg btn-primary"
              id="inputGroup-sizing-lg"
            >
              Name:{" "}
            </label>
            <input

              type="text"
              {...register("name", {
                required: true,
              })}
            />

            {errors.name?.type === "required" && <p>name is required</p>}
          </div>
          <br />
          <div className="input-group input-group-lg">
            <label
              className="input-group-text btn btn-lg btn-primary"
              id="inputGroup-sizing-lg"
            >
              E-mail:{" "}
            </label>
            <input

              type="mail"
              {...register("mail", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
            />

            {errors.mail?.type === "required" && <p>e-mail is required</p>}
            {errors.mail?.type === "pattern" && <p>formato incorrecto</p>}
          </div>
          <br />
          <div className="input-group input-group-lg">
            <label
              className="input-group-text btn btn-lg btn-primary"
              id="inputGroup-sizing-lg"
            >
              Adress:{" "}
            </label>
            <input
              type="text"
              {...register("adress", {
                required: true,
              })}
            />

            {errors.adress?.type === "required" && <p>adress is required</p>}
          </div>
          <br />
          <div className="input-group input-group-lg">
            <label
              className="input-group-text btn btn-lg btn-primary"
              id="inputGroup-sizing-lg"
            >
              Logo:{" "}
            </label>

            <input
              type="file"
              name="file"
              placeholder="Logo"
              onChange={uploadImage}
              className="form-control"
              id="inputGroupFile01"
            />
          </div>
          <br />
          <div className="input-group input-group-lg">
            <label
              className="input-group-text btn btn-lg btn-primary"
              id="inputGroup-sizing-lg"
            >
              Phone:{" "}
            </label>
            <input
              type="number"
              {...register("phone", {
                required: true,
              })}
            />

            {errors.phone?.type === "required" && <p>phone is required</p>}
          </div>
          <br />
          <div className="input-group input-group-lg">
            <label
              className="input-group-text btn btn-lg btn-primary"
              id="inputGroup-sizing-lg"
            >
              CUIT:{" "}
            </label>
            <input
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              type="number"
              {...register("CUIT", {
                required: true,
              })}
            />

            {errors.CUIT?.type === "required" && <p>CUIT is required</p>}
          </div>
          <br />
          <div className="input-group input-group-lg">
            <label
              className="input-group-text btn btn-lg btn-primary"
              id="inputGroup-sizing-lg"
            >
              Status:{" "}
            </label>
            <select
              className="form-select"
              id="inputGroup-sizing-lg"
              {...register("disable", {
                required: true,
              })}
            >
              <option disabled>Status: </option>
              <option value={false}>Asset</option>
              <option value={true}>Inactive</option>
            </select>
          </div>
          <br />
          <div className="d-grid gap-2 col-6 mx-auto">
            <input type="submit" value="Save" className="btn btn-primary" />
            <Link to="/homeAdmin">
              <button className="btn btn-danger">Cancel</button>
            </Link>
          </div> */

/*
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { clearCloudinaryResponse, postCloudinaryPhoto, postProviders } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
import { Container, FormGroup, Input } from 'reactstrap'
// import style from './ProviderCreate.module.css'
import axios from "axios";
import { useEffect } from "react";


const FormProvider = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
    }, [input])

    React.useEffect(async () => {
        await setInput({
            ...input,
            logo: responseCloudinary.url,
        })
    }, [errors])

    let formValidate = (value) => {
        let errors = {}

        if (!value.name) errors.name = 'Name is required'
        else if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(value.name)) errors.name = 'Name is invalid'

        if (!value.mail) errors.mail = 'Mail is required'
        else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value.mail)) errors.mail = 'Mail is invalid'

        if (!value.adress) errors.adress = 'Adress is required'
        if (!value.phone) errors.phone = 'Phone is required'
        if (!value.CUIT) errors.CUIT = 'CUIT is required'

        return errors
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        await dispatch(postProviders(input));

        toast("Correctly created", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
    };

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
            <h3 className="display-5">Provider create</h3>
            <hr />
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input-group input-group-lg">
                    <label className="input-group-text btn btn-lg btn-primary" id="inputGroup-sizing-lg">Name: </label>
                    <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" type="text" name='name' value={input.name} onChange={(e) => handleChange(e)} />
                    {errors.name?.type === 'required' && <p>name is required</p>}
                </div>
                <br />
                <div className="input-group input-group-lg">
                    <label className="input-group-text btn btn-lg btn-primary" id="inputGroup-sizing-lg">E-mail: </label>
                    <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" type="mail" name='mail' value={input.mail} onChange={(e) => handleChange(e)} />
                    {errors.mail?.type === 'required' && <p>e-mail is required</p>}
                    {errors.mail?.type === 'pattern' && <p>formato incorrecto</p>}
                </div>
                <br />
                <div className="input-group input-group-lg">
                    <label className="input-group-text btn btn-lg btn-primary" id="inputGroup-sizing-lg">Adress: </label>
                    <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" type="text" name='adress' value={input.adress} onChange={(e) => handleChange(e)} />
                    {errors.adress?.type === 'required' && <p>adress is required</p>}
                </div>
                <br />
                <div className="input-group input-group-lg">
                    <label className="input-group-text btn btn-lg btn-primary" id="inputGroup-sizing-lg">Logo: </label>

                    <input
                        type="file"
                        name="file"
                        placeholder="Logo"
                        onChange={(e) => uploadImage(e)}
                        className="form-control"
                        id="inputGroupFile01"

                    />

                </div>
                <br />
                <div className="input-group input-group-lg">
                    <label className="input-group-text btn btn-lg btn-primary" id="inputGroup-sizing-lg">Phone: </label>
                    <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" type="number" name='phone' value={input.phone} onChange={(e) => handleChange(e)} />
                    {errors.phone?.type === 'required' && <p>phone is required</p>}
                </div>
                <br />
                <div className="input-group input-group-lg">
                    <label className="input-group-text btn btn-lg btn-primary" id="inputGroup-sizing-lg">CUIT: </label>
                    <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" type="number" name='CUIT' value={input.CUIT} onChange={(e) => handleChange(e)} />
                    {errors.CUIT?.type === 'required' && <p>CUIT is required</p>}
                </div>
                <br />
                <div className="d-grid gap-2 col-6 mx-auto">
                    <input type="submit" value="Save" className="btn btn-primary" />
                    <Link to="/homeAdmin" ><button className="btn btn-danger">Cancel</button></Link>
                </div>
            </form>
            <div>
                {
                    !responseCloudinary ? null : (
                        <img src={responseCloudinary.secure_url} />
                    )
                }
            </div>
        </div>
    )
}
export default FormProvider;
*/
