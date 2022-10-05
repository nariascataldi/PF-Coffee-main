import { Link } from "react-router-dom"

const ButtonXartiago = ({ clase, btnClass, btn, page, onMouseOut}) => {
    return (
        <div className={clase} >
            <Link to={`/${page}`}> <button className={btnClass} onMouseOut={onMouseOut}>{btn}</button> </Link>
        </div>
    )
}

export default ButtonXartiago