import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getByTitle, setFilterState } from '../redux/actions/index.js';
import { BsSearch } from 'react-icons/bs';
import style from '../styles/Admin/NavBarAdm.module.css';

export default function SearchBar() {

  const [busqueda, setBusqueda] = useState('');
  const [searchOptions, setSearchOptions] = useState([]);
  const allProd = useSelector((state) => state.products);

  const dispatch = useDispatch();
  // let allProducts = useSelector(state => state.allProducts)
  React.useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch])

  const handleOnChange = (e) => {
    setBusqueda(e.target.value)
    dispatch(getByTitle(busqueda));
    //autocomplete
    e.target.value !== '' && setSearchOptions(allProd.filter(prod => prod.title.toLowerCase().includes(busqueda.toLowerCase())).slice(0,6))
   
    if (e.target.value === '') {
      setSearchOptions([])
      dispatch(getAllProducts())
    }
    //autocomplete
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setFilterState({ title: busqueda }));
    setBusqueda('')
  };
  //Autocomplete
  function handleAutoCompleteClick(e) {
    e.preventDefault()
    const searchBar = document.getElementById('searchBar')
    searchBar.value = e.target.value

    e.target.value !== '' && setSearchOptions(allProd.filter(prod => prod.title.toLowerCase().includes(e.target.value.toLowerCase())))

    setBusqueda(e.target.value)

    setSearchOptions([])
    dispatch(getByTitle(e.target.value))
    setBusqueda('')
  }
 
  let autocomplete = searchOptions.map(option => {
    return (
      searchOptions.length > 0 && <button className={style.autoComplete} value={option.title} key={option.title} onClick={handleAutoCompleteClick} >{option.title}</button>
    )
  })
  //Autocomplete
  return (
    <Fragment>
      <form className={style.searchBar}>
        <input
          id='searchBar'
          className={style.input_search}
          type='text' 
          name='title'
          onChange={e => handleOnChange(e)}
          value={busqueda}
          placeholder='Search...' />
        <button
          className={style.search_button}
          type='submit'
          onClick={(e) => handleSubmit(e)}>
          <BsSearch /></button>
        <div className={style.autoCompleteContainer}>
          {autocomplete}
        </div>
      </form>
    </Fragment>
  )
}