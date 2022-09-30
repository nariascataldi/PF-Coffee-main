import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMailArray } from "../../../redux/actions";

export default function CardMails ({mail}){
    let dispatch = useDispatch();
    let checkedMails = useSelector(state => state.checkedMails)

    React.useEffect(() => {
        console.log(checkedMails)
    },[checkedMails])

    const handleClickCheck = async (e) => {
        dispatch(changeMailArray(e.target.value))
    }

    return (
        <div>
            mail: {mail}
            <input type="checkbox" value={mail} onClick={(e) => handleClickCheck(e)}/>
        </div>
      );
}