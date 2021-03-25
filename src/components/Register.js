import React, { useState } from 'react';
import axios from 'axios';  
import { Link } from 'react-router-dom'; 

function Register(){

    const [username,setUsername] = useState("")
    const [ password, setPassword ] = useState("")
    const[email, setEmail] = useState("")
    const [first_name,setFirstname] = useState("")
    const [last_name,setLastname] = useState("")
    const apiUrl="https://prateek-auth-django-api.herokuapp.com/api/auth/register/";

    const signUp=(e)=>
    {
        e.preventDefault();  
      

        const item={username,password,email,first_name,last_name};
        console.log(item);
        console.log("saving into database");
        
        axios.post(apiUrl, item)  
          .then((result) => {  
        
        console.log(result.data);  
        if (result.data.Status === 'Invalid')  
          alert('Invalid User');  
        else  
        alert("Successfully saved")
      })
      .catch(err => { console.log(err)})  
        
    }

return(
      <div className="container"> 
      <div className="xs-6">
      <h1 className="text-center">Register Page</h1>


    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control" placeholder="username" />
    <br></br>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password" />
    <br />
    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email" />
    <br />
    <input type="text" value={first_name} onChange={(e)=>setFirstname(e.target.value)} className="form-control" placeholder="firstname" />
    <br />
    <input type="text" value={last_name} onChange={(e)=>setLastname(e.target.value)} className="form-control" placeholder="lastname" />
    <br />
    <button onClick={signUp} className="btn btn-primary" style={{ marginLeft: '500px'  }}> Sign Up </button>
  {"    "}
  <Link className="btn btn-primary"  role="button" to="/login" > Log In </Link>
    
</div>

      
      </div>
    )
}


export default Register;