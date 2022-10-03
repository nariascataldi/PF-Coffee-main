import React from "react";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { clearCloudinaryResponse, postCloudinaryPhoto, getProductDetail, putProduct } from '../../../../redux/actions/index'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { Container, FormGroup, Input, Modal } from 'reactstrap'
import { Link, useParams } from "react-router-dom";
import { useModal } from "../../../../hooks/UseModal";

import { ToastContainer, toast } from "react-toastify";


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
    if(e.target.value === 'yes') {
      dispatch(putProduct(data, id));

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
    }
    else {
      closeModal()
    }
  }

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'Product');
    setLoading(true);
   await dispatch(postCloudinaryPhoto(data))
    setImage(responseCloudinary.secure_url)
    setLoading(false)
  }


  return (
    <div>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <h1>Modify Product</h1>
        <div class="d-flex justify-content-evenly">
          <button
            value="yes"
            onClick={handleSubmit(handleClickYesNo)}
            class="border-0"
          >
            Yes
          </button>
          <ToastContainer />
          <button
            value="no"
            onClick={handleSubmit(handleClickYesNo)}
            class="border-0"
          >
            No
          </button>
          <ToastContainer />
        </div>
      </Modal>

      <h2>Product Modify </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="Title">
          <label>title: </label>
          <input
            type="text"
            defaultValue={productDetail.title}
            {...register("title", { required: true })}
          />
        </div>
        <div id="Cost">
          <label>Cost: </label>
          <input
            type="number"
            defaultValue={productDetail.cost}
            {...register("cost", {
              required: true,
            })}
          />
        </div>
        <div id="Margin">
          <label>Margin </label>
          <input
            type="number"
            defaultValue={productDetail.margin}
            {...register("margin", {
              required: true,
            })}
          />
        </div>
        <div id="Price">
          <label>Price </label>
          <input
            type="number"
            defaultValue={productDetail.price}
            {...register("price", {
              required: true,
            })}
          />
          {errors.price?.type === "required" && <p>price is required</p>}
        </div>
        <div id="Stock">
          <label>Stock </label>
          <input
            type="number"
            defaultValue={productDetail.stock}
            {...register("stock", {
              required: true,
            })}
          />
        </div>
        <div id="Description">
          <label>Description: </label>
          <textarea
            type="text"
            defaultValue={productDetail.description}
            {...register("description", {
              required: true,
            })}
          />
        </div>
        <div id="Image">
          <label>Image: </label>
          <Container>
            <p>Uploading images</p>
            <FormGroup>
              <Input
                type="file"
                name="file"
                placeholder="Image"
                onChange={uploadImage}
              />
            </FormGroup>
          </Container>
        </div>
        <div id="Status">
          <label>Status: </label>
          <select {...register("disable", {})}>
            <option disabled>
              Status: {productDetail.disable === true ? "Inactive" : "Asset"}
            </option>
            <option value={false}>Asset</option>
            <option value={true}>Inactive</option>
          </select>
        </div>
        <input type="submit" value="Save" />
        <Link to="/homeAdmin">
          <button>Cancel</button>
        </Link>
      </form>
      <div>
        {!responseCloudinary ? null : (
          <img src={responseCloudinary.secure_url} />
        )}
      </div>
    </div>
  );
}
export default FormModifyProduct;