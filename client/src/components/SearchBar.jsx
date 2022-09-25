import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts, getByTitle, setFilterState } from '../redux/actions/index.js';
import { BsSearch } from 'react-icons/bs';
import style from '../styles/Admin/NavBarAdm.module.css';

export default function SearchBar() {

  const [busqueda, setBusqueda] = useState('');

  const dispatch = useDispatch();
  // let allProducts = useSelector(state => state.allProducts)
  React.useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch])

  const handleOnChange = (d) => {
    setBusqueda(d.target.value)
    dispatch(getByTitle(busqueda));
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setFilterState({ title: busqueda }));
    setBusqueda('')
  }
  return (
    <Fragment>
      <form className={style.searchBar} onSubmit={(e) => handleSubmit(e)}>
        <input className={style.input_search} type='text' name='title' onChange={d => handleOnChange(d)} value={busqueda} placeholder='Search...' />
        <button className={style.search_button} type='submit'><BsSearch /></button>
      </form>
    </Fragment>
  )
}