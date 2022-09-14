import React from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../redux/actions';
import './Home.css'
import NavBar from '../NavBar/NavBar';
import Cards from '../Cards/Cards';
import Loading from '../Loading/Loading'

export default function Home() {
    const dispatch = useDispatch
    useEffect(() => {
        setLoading(true);
        dispatch(getAllProducts());
        setLoading(false);
    }, [[dispatch]])

    const [loading, setLoading] = useState(false);


    return (
        <div>
            {loading && <Loading />}
            <p>Este es el home</p>

        </div>
    )
}