import React, {useState} from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom'; 

function Login(){


    const [username,setUsername] = useState("")
    const [ password, setPassword ] = useState("")
    const apiUrl="https://prateek-auth-django-api.herokuapp.com/api/auth/login/";

    const signIn=(e)=>{
        e.preventDefault();  
      

        const item={username,password};
        console.log(item);
        
        
        axios.post(apiUrl, item)  
          .then((result) => {  
        
        console.log(result.data);  
        if (result.data.Status === 'Invalid')  
          alert('Invalid User');  
        else  
        console.log("Successfully loggined")
        alert("Login Successfull for: "+ username)
      })
      .catch(err => { console.log(err)})  
    }

    return(
        <div className="container"> 
        <h1 className="text-center">Login Page</h1>
  
      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control" placeholder="username" />
      <br></br>
      <br />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  className="form-control" placeholder="password" />
      <br></br>
      <br />
      <button onClick={signIn} role="button" style={{ marginLeft: '500px'  }}  className="btn btn-primary"> Sign In </button>
      <Link className="btn btn-primary" style={{ marginLeft: '10px'  }}  role="button" to="/register" > Sign Up </Link>
  
  
        
        </div>
      )
}

export default Login