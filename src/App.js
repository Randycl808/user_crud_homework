import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState([])
  const [loadingData, setLoadingData] = useState(false) //FALSE until loading DATA happens

  const getUserData  = ()=>{
    setLoadingData(true) //TRUE when loading DATA, BACK 2 FALSE when finished
    axios.get('https://reqres.in/api/users?delay=4')//DELAY 4= 4 second delay
    .then((res)=>{
      console.log('res', res)
      //the JSON we see in browser converted to JS
      console.log('res.data', res.data)
      console.log('res.data', res.data.data) //USERS you extracted from DATABASE
      setUserData(res.data.data)
      setLoadingData(false) //BACK 2 FALSE, loading DATA is DONE
    })
    .catch(err=>{
      console.log('err', err)
    })
  }

  return (
    <div className="App">
      <h1>Hi, This is a Database Tutorial</h1>
      <button onClick={getUserData}>Get Data from Database</button> 
      <div>{JSON.stringify(userData)}</div>
  </div> //BUTTON linked w/ getUserData. To get the DATA and list DATA
  );
}

export default App;
