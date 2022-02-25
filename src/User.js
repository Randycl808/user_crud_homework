import { useState } from "react";
import EditUser from "./EditUser";

const User = (props) => {
  const [showForm, setShowForm] = useState(false);
  console.log("props:", props);
  const renderUser = () => {
    return (
      <> 
        <h1>
          {/*extracts FIRST & LAST name from DATABASE*/}
         <u> {props.first_name} {props.last_name}</u> 
        </h1>
        {/*extracts EMAIL,ID, & AVATAR from DATABASE  */}
        <p><u>Email: </u>{props.email}</p>
        <p><u>ID: </u>{props.id}</p>
        <p><u>Avatar: </u>{props.avatar}</p>
        <button className="Button4" onClick={() => props.deleteUserYo(props.id)}>delete user</button>
    </>
      // Button ABOVE allows you to DELETE DATA
    );
  };
//whenever you ADD DATABASE'Get Users'... list of Added DATA
//EDIT & CANCEL Button
  return (
    <div style={{ border: "3px solid yellow", margin: "20px" }}>
        <button className={showForm ? 'cancel_button' : 'edit_button'}onClick={()=>setShowForm(!showForm)}>{showForm ? 'cancel' : 'edit'}</button> 
        {showForm ? <EditUser {...props}  /> : renderUser()}
      
    </div>
  );
};
export default User;
