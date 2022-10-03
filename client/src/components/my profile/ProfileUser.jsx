import React from "react"
import {Link} from 'react-router-dom'
import FormModifyProvider from './UpdateProfile'



function ProfileUser(){
return(
<div>
<Link to={`/updateProfile/1`}><button type="button">modify</button></Link>    

</div>
)
}
//
export default ProfileUser;