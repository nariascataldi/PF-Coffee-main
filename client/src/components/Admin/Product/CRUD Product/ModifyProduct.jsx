import React from "react";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { clearCloudinaryResponse, postCloudinaryPhoto, getProductDetail, putProduct } from "../../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { Container, FormGroup, Input } from 'reactstrap'
import { Link, useParams } from "react-router-dom";


const FormModifyProduct = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const onSubmit = (data, e) => {
    dispatch(putProduct(data, id));
    e.preventDefault();
    e.target.reset();
    alert('Correctly modify')
    navigate('/homeAdmin')
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
  {/* */ }
  return (
    <div>
      <h2>Product Modify </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="Title">
          <label>title: </label>
          <input type="text" defaultValue={productDetail.title}{...register('title', {
          })} />
        </div>
        <div id="Cost">
          <label>Cost: </label>
          <input type="number" defaultValue={productDetail.cost}{...register('cost', {
          })} />
        </div>
        <div id="Margin">
          <label>Margin </label>
          <input type="number" defaultValue={productDetail.margin}{...register('margin', {
          })} />
        </div>
        <div id="Price">
          <label>Price </label>
          <input type="number" defaultValue={productDetail.price}{...register('price', {
            required: true
          })} />
          {errors.price?.type === 'required' && <p>price is required</p>}
        </div>
        <div id="Stock">
          <label>Stock </label>
          <input type="number" defaultValue={productDetail.stock}{...register('stock', {
          })} />
        </div>
        <div id='Description'>
          <label>Description: </label>
          <textarea type="text" defaultValue={productDetail.description}{...register('description', {
          })} />
        </div>
        <div id="Image">
          <label>Image: </label>
          <Container>
            <p>Uploading images</p>
            <FormGroup >
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
          <select {...register('disable', {
          })}>
            <option disabled>Status: {productDetail.disable === true ? "Inactive" : "Asset"}</option>
            <option value={false} >Asset</option>
            <option value={true} >Inactive</option>
          </select>
        </div>
        <input type="submit" value="Save" />
        <Link to="/homeAdmin"><button>Cancel</button></Link>
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
export default FormModifyProduct;