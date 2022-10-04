import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getAllProviders } from '../../redux/actions';

import ProviderCard from '../Provider/ProviderCard';

const ProviderCards = () => {

    let dispatch = useDispatch();

    let providers = useSelector(state => state.providers)

    useEffect(() => {
      dispatch(getAllProviders());
    }, [dispatch]);


    return (
        <div>
            {
                providers && providers.map(p => (
                    <ProviderCard key={p.id} mail={p.mail} logo={p.logo} adress={p.adress} phone={p.phone} CUIT={p.CUIT}/>
                ))
            }
        </div>
    );
};

export default ProviderCards