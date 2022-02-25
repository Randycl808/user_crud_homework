
import {useState} from 'react'
const NewUser = (props) => {
   const [email, setEmail] = useState('')
   const [first_name, set_first_name] = useState('')
   const [lastName, setLastName] = useState('')
   const [foo, bar] = useState('')
   const handleSubmit = (e) =>{
       // prevent refresh
       e.preventDefault()
       console.log('email input value', email)
       console.log('first name value:', foo)
       // if key and value you can short hand ie email:email => email
       let newUser = {id:Math.random(), first_name, last_name:lastName, avatar:foo, email}
       console.log(newUser)

       // add to users state
       props.addUserCB(newUser)
       setEmail('')
       set_first_name('')
       setLastName('')
       bar('')
   }
  return (
    <div style={{ border: "2px solid green", margin:'40px', padding:'20px' }}>
      {/* NEW USER FORM */}
      <h1>New User Form</h1>
      <hr color='black' />
      {/* NEW USER (SUBMIT PART) */}
      <form onSubmit={handleSubmit}>
        <p><u>Email:</u></p>
        <input className='log_background' placeholder='Email@...'value={email}onChange={(e)=> {setEmail(e.target.value)}} />
        <p><u>First Name:</u></p>
        <input className='log_background' placeholder='FirstName...' value={first_name} onChange={(e)=> {set_first_name(e.target.value)}} />
        <p><u>Last Name:</u></p>
        <input className='log_background' placeholder='LastName...'value={lastName} onChange={(e)=> {setLastName(e.target.value)}} />
        <p><u>Avatar:</u></p>
        <input className='log_background' placeholder='Avatar...'value={foo} onChange={(e)=> {bar(e.target.value)}} />
        <br />
        {/* NEW USER BUTTON ...  */}
        <button className='Button2'>add user</button>
      </form>
    </div>
  );
};

export default NewUser
