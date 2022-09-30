import React, { useState } from "react";

export default function CardMails ({mail, handle}){

    // let [checkedMails, setCheckedMails] = useState([])

    // React.useEffect(() => {
    //     console.log(checkedMails)
    // },[checkedMails])

    // const handleClickCheck = async (e) => {
    //     if (e.target.checked) {
    //         setCheckedMails([...checkedMails, e.target.value])
    //     }
    //     else if (!e.target.checked) {
    //         setCheckedMails(checkedMails.filter(f => f !== e.target.value))
    //     }
    // }

    return (
        <div>
            mail: {mail}
            <input type="checkbox" value={mail} onClick={handle}/>
        </div>
      );
}