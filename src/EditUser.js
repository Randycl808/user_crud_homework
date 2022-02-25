
import {useState} from 'react'
const EditUser = (props) => {
   const [email, setEmail] = useState(props.email)
   const [first_name, set_first_name] = useState(props.first_name)
   const [lastName, setLastName] = useState(props.last_name)
   const [foo, bar] = useState(props.avatar)
   const handleSubmit = (e) =>{
       // prevent refresh
       e.preventDefault()
       // if key and value you can short hand ie email:email => email
       let updatedUser = {id:props.id, first_name, last_name:lastName, avatar:foo, email}
       console.log(updatedUser)

       // add to users state
       props.updateUser(updatedUser)
       setEmail('')
       set_first_name('')
       setLastName('')
       bar('')
   }
  return (
    <div style={{ border: "2px solid pink", margin:'40px', padding:'20px' }}>
      <h1>Edit User Form</h1>
      <hr color='black' />
      <form onSubmit={handleSubmit}>
        <p><u>Email:</u></p>
        <input className='log_background' placeholder='Email@...'value={email} onChange={(e)=> {setEmail(e.target.value)}} />
        <p><u>First Name:</u></p>
        <input className='log_background'value={first_name} onChange={(e)=> {set_first_name(e.target.value)}} />
        <p><u>Last Name:</u></p>
        <input className='log_background'value={lastName} onChange={(e)=> {setLastName(e.target.value)}} />
        <p><u>Avatar:</u></p>
        <input className='log_background'value={foo} onChange={(e)=> {bar(e.target.value)}} />
        <br />
        <button className='edit_user'>submit your edit</button>
      </form>
    </div>
  );
};

export default EditUser
