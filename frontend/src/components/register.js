
import { useState } from 'react';
import './register.css';
const Register = () =>{
 
  const [userRegistration, setuserRegistration] = useState({
    username:"",
    password:"",
    email:"",
    contact:"",
  })
  const [record, setRecord] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name,value)

    setuserRegistration({...userRegistration, [ name ] :value})

  }
 const handleSubmit = (e) => {
  e.preventDefault();

  const newRecord={...userRegistration, id : new Date().getTime().toString()}
  setRecord([...newRecord,newRecord]);
 }


  return(
<div className="container">

            <div className="reg-card" >
            <h3 className="text-center">Join Us </h3>
                <div className="form-reg"  >
   <form  action="" onSubmit={handleSubmit} className="register form">

   <label className=" label-reg ">Username</label>
     <input className="my-input" type="text" autoComplete='off' value={userRegistration.username} onChange={handleInput} placeholder="username"/>

     <label className="label-reg " >Password</label>
     <input className="my-input" type="password" value={userRegistration.password} onChange={handleInput} placeholder="password"/>

     <label className="label-reg ">Contact</label>
     <input className="my-input" type="text" value={userRegistration.contact} onChange={handleInput} placeholder="phone number"/>

     <label className="label-reg ">Email</label>
     <input className="my-input" type="email" value={userRegistration.email} onChange={handleInput} placeholder="email"/>

    

     
     <button type="submit" className="btn btn-dark">Register</button>
    
</form>
   

</div>
</div>
</div>
  )
}

export default Register;