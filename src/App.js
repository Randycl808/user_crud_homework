import logo from "./logo.svg";
import "./App.css";
import {useState} from 'react'
import axios from "axios";
import User from "./User";
import NewUser from "./NewUser";
//ABOVE ME = Importing all pages & DATABASE

function App() {
  const [users, setUsers] = useState([])
  // const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false) //FALSE until loading DATA happens
  const [error, setError] = useState(null)


  const getUsers = () => {
    setLoading(true) //TRUE when loading DATA, BACK 2 FALSE when finished
    setError(null)
    axios
      .get("https://reqres.in/api/users?delay=1") //DELAY 1= 1 second delay
      .then((res) => {
        console.log('res:', res)
        //the JSON (DATA)we see in browser converted to JS
        console.log('res.data', res.data) //specific part of DATA
        console.log('res.data.data', res.data.data) //more specific part of DATA
        setUsers(res.data.data) //extracting data from specific part
        setLoading(false) //BACK 2 FALSE, loading DATA is DONE
      })
      .catch((err) => {
         setError('Some error occurred!!!!') //returned IF DATA cant be FOUND
         setLoading(false) //BACK 2 FALSE, Error notified
      });
  };


  const addUser = (user)=>{
    let newUsers = [user, ...users]
    setUsers(newUsers)
  };


  const deleteUser = (id)=>{
    console.log('in app js')
    console.log('deleting item with id:',id)
    // TODO: delete from DB
    // UPDATE UI
    let newUsers =users.filter(u=> u.id !==id)
    setUsers(newUsers)
};


const updateUser =(user)=>{
  console.log('in app.js user is:', user)
  // user.. i want to update users with the user updated
  let updatedUsers = users.map(u=>{
    if(u.id === user.id){
      return user
    }
    return u
  })
  setUsers(updatedUsers)
};


const renderUsers = ()=>{
  // user is {"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"}
  return users.map((user)=>{
    return <User key={user.id} {...user} updateUser={updateUser} deleteUserYo={()=> deleteUser(user.id)}/>
  })
};

  return (
    
    <div className="App" style={{border:'5px solid black', margin:'10px', padding:'10px'}}>
      <h1>DataBase Extraction!</h1> 
      <hr color="black"/>
      {/* New User FORM & FUNCTION */}
      <NewUser addUserCB={addUser}/>
      {/* button below New User Form... loads DATA LIST */}
      <button className='Button2'disabled={loading} onClick={getUsers}>{loading ? 'loading users, please wait...':'get users'}</button>
      <div>{renderUsers()}</div>
      <hr color="black" />
      {/* lists USERS[EMAIL,ID,ECT below] */}
      <h1>List of the Users</h1> 
      <hr color="black" />
      <div >{JSON.stringify(users)}</div>
      {/* gives NOTIFICATION that DATA extraction failed */}
      {error && <p style={{color:'red'}}>ERROR: {error}</p>}
    </div>
  );
}

export default App;

