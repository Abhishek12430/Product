

import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Register = () => {
    const navigate = useNavigate();
    const[name,setname] = useState("")
    const [email, setemail] = useState("");
    const [password,setpassword] = useState(""); 

    const handleSubmit = async(e)=>{
       e.preventDefault();
   try{
     const response = await axios.post('http://localhost:5000/api/register',{name,email,password})
     if(response.data.message){
         alert(response.data.message);
     }
   }catch(error){
     console.error(error);
   }
    }
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
    <input type="text" placeholder='enter name' value={name} onChange={(e)=>setname(e.target.value)} />
    <input type="email" placeholder='enter email' value={email} onChange={(e)=>setemail(e.target.value)} />
    <input type="password" placeholder='enter password' value={password} onChange={(e)=>setpassword(e.target.value)} />
    <button type='submit'>Register</button>
    </form>
    <button onClick={()=>navigate('/')}>Login</button>
    </>
  )
}

export default Register