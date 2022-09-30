import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../../redux/actions";
import CardMails from "./CardMails";


export default function CardsNews (){
    let dispatch = useDispatch();
    let users = useSelector(state => state.users)

    React.useEffect(() => {
        dispatch(getAllUsers())
    },[])

  return (
    <div>
        <h1>Select mails to send Newsletter</h1>
        <div>
        {
            users && users.map(p => (
            <CardMails key={p.id} name={p.name} mail={p.mail} disable={p.disable} id={p.id} />
            ))
        }
        </div>
        <div>
            <br />
            <br />
            <button>Create Offer</button>
            <select name="" id="">
                <option value="">Select Offer to send</option>
            </select>
        </div>
    </div>
  );
}