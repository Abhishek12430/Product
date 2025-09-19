import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState("");
    const [password,setpassword] = useState(""); 

    const handleSubmit = async(e)=>{
       e.preventDefault();
try{
     const response = await axios.post('http://localhost:5000/api/login',{email,password})

     if(response.data.user){
       localStorage.setItem('user',JSON.stringify(response.data.user))
       navigate('/product');
     }
     alert(response.data.message);
}catch(error){
   console.error(error);
}
    }
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
    <input type="email" placeholder='enter email' value={email} onChange={(e)=>setemail(e.target.value)} />
    <input type="password" placeholder='enter password' value={password} onChange={(e)=>setpassword(e.target.value)} />
    <button type='submit'>Login</button>
    </form>
    <button onClick={()=>navigate('/register')}>Register</button>
    </>
  )
}

export default Login