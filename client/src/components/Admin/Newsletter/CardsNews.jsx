import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
      {
        users && users.map(p => (
          <CardMails key={p.id} name={p.name} mail={p.mail} disable={p.disable} id={p.id} />
        ))
      }
    </div>
  );
}