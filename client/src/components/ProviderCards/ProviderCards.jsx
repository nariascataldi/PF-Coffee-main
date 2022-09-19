import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProviders } from '../../redux/actions';
import ProviderCard from '../ProviderCard/ProviderCard';
import './ProviderCards.css'

const ProviderCards = () => {

    let dispatch = useDispatch();

    let providers = useSelector(state => state.providers)

    React.useEffect( async () => {
        await dispatch(getAllProviders())
    },[])

    return (
        <div className='providerCardsContainer'>
            {
                providers && providers.map(p => (
                    <ProviderCard key={p.id} mail={p.mail} logo={p.logo} adress={p.adress} phone={p.phone} CUIT={p.CUIT}/>
                ))
            }
        </div>
    );
};

export default ProviderCards