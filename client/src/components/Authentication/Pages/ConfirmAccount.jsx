import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'

// import confirmId from '../../../redux/actions'


const ConfirmAccount = () => {

const { id } = useParams();

// useEffect(() => {
//   dispatch(confirmId(id))
// })

  return (
    <>
      <h1 className="">
        <b>Confirmar cuenta</b>
      </h1>
    </>
  );
}

export default ConfirmAccount
