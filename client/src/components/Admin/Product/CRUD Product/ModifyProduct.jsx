import React from "react";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { clearCloudinaryResponse, postCloudinaryPhoto, getProductDetail, putProduct } from '../../../../redux/actions/index.js';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Container, FormGroup, Input, Modal } from 'reactstrap';
import { Link, useParams } from "react-router-dom";
import { useModal } from "../../../../hooks/UseModal";
import { ToastContainer, toast } from "react-toastify";

import Figure from 'react-bootstrap/Figure';
import logo from '../../../../assets/logo_coffee.png';
import NavBarAdmin from '../../NavBarAdmin/NavBarAdmin';

import style from '../../../../styles/Admin/ModifyProduct.module.css';
import sty from '../../../../styles/Admin/ProductCreate.module.css'


const FormModifyProduct = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpenModal, openModal, closeModal] = useModal(false)
  let responseCloudinary = useSelector(state => state.responseCloudinary)
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm({});
  /////
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch])


  const { productDetail } = useSelector((state) => state);
  const onSubmit = async (e) => {
    await openModal()
  }

  const handleClickYesNo = (data, e) => {
    if (e.target.value === 'yes') {
      dispatch(putProduct({ ...data, image: responseCloudinary.url }, id));

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
    }
    else {
      closeModal()
    }
  }

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'Provider');
    await dispatch(postCloudinaryPhoto(data))
  }


  return (
    <div className={style.bodymod}>
      {/* ---------Navbar y Modal -----------------*/}
      {/* <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <h1>Modify Product</h1>
        <div class="d-flex justify-content-evenly">
          <button className={style.botonesformC}
            value="yes"
            onClick={handleSubmit(handleClickYesNo)}
            class="border-0"
          >
            Yes
          </button>
          <ToastContainer />
          <button className={style.botonesformC}
            value="no"
            onClick={handleSubmit(handleClickYesNo)}
            class="border-0"
          >
            No
          </button>
          <ToastContainer />
        </div>
      </Modal> */}
      <Modal className={sty.conteimodal} isOpen={isOpenModal} closeModal={closeModal}>
        <h1 className={sty.h1modal} > Modify Product</h1>

        <div className={sty.buttonModal}>
          <button id={sty.submit} 
            value="yes"
            onClick={handleSubmit(handleClickYesNo)}
          >
            Yes
          </button>
          <button id={sty.submit}
            value="no"
            onClick={handleSubmit(handleClickYesNo)}
          >
            No
          </button>
          <ToastContainer/>
        </div>
      </Modal>
      <NavBarAdmin />
      <div className={style.figpos}>
        <Figure>
          <Figure.Image className={style.figulog} width={17 * 5} height={18 * 5} alt="El Logo" src={logo} />
        </Figure>
      </div>
      {/* ---------------------------------------------- */}
      <div className={style.container}>
        <form className={style.containerform} onSubmit={handleSubmit(onSubmit)}>
          <div id="Title" className={style.titleform}>
            <label className={style.labelgroup}>Title of the Product</label>
            <input
              className={style.inputlarge}
              type="text"
              defaultValue={productDetail.title}
              {...register("title", { required: true })}
            />
          </div>
          <div className={style.numberform}>
            <div id="Cost">
              <label className={style.labelgroup}>Cost: </label>
              <input
                className={style.inputsmall}
                type="number"
                defaultValue={productDetail.cost}
                {...register("cost", {
                  required: true,
                })}
              />
            </div>
            <div id="Margin">
              <label className={style.labelgroup}>Margin </label>
              <input
                className={style.inputsmall}
                type="number"
                defaultValue={productDetail.margin}
                {...register("margin", {
                  required: true,
                })}
              />
            </div>
            <div id="Price">
              <label className={style.labelgroup}>Price </label>
              <input
                className={style.inputsmall}
                type="number"
                defaultValue={productDetail.price}
                {...register("price", {
                  required: true,
                })}
              />
              {errors.price?.type === "required" && <p>price is required</p>}
            </div>
          </div>
          <div className={style.descimage}>
            <div id="Description">
              <label className={style.labelgroup}>Description: </label>
              <textarea
                className={style.inputmedium}
                type="text"
                defaultValue={productDetail.description}
                {...register("description", {
                  required: true,
                })}
              />
            </div>
            <div id="Image" >
              <label className={style.labelgroup}>Image: </label>
              <Container >
                {/* <p>Uploading images</p> */}
                <FormGroup className={style.inputmedium} >
                  <Input
                    className={style.imageupform}
                    type="file"
                    name="file"
                    placeholder="Image"
                    onChange={uploadImage}
                  />
                </FormGroup>
              </Container>
            </div>
          </div>
          <div className={style.statstock}>
            <div id="Status">
              <label className={style.labelgroup}>Status: </label>
              <select
                className={style.inputsmall}
                {...register("disable", {})}>
                <option disabled>
                  Status: {productDetail.disable === true ? "Inactive" : "Asset"}
                </option>
                <option value={false}>Asset</option>
                <option value={true}>Inactive</option>
              </select>
            </div>
            <div id="Stock">
              <label className={style.labelgroup}>Stock </label>
              <input
                className={style.inputsmall}
                type="number"
                defaultValue={productDetail.stock}
                {...register("stock", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div className={style.botones}>
            <input className={style.botonesform} type="submit" value="Save" />
            <Link to="/homeAdmin">
              <button className={style.botonesform} >Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default FormModifyProduct;