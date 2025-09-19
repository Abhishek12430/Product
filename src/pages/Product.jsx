import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Product = () => {
  const navigate = useNavigate()
    const[data, setdata] = useState([])
   useEffect(()=>{
   const fetchdata=async()=>{
    try{
      const response = await axios.get("http://localhost:5000/api/product");
    if(response.data.data){
        setdata(response.data.data);
    }

    }catch(error){
   console.error(error);
    }

   }
    fetchdata()
   },[data])

   const Logout=()=>{
    localStorage.removeItem('user');
     navigate('/')
   } 

  return (
    <>
      <div>
        {
            data.map((ps)=>(
                <ul key={ps.id}>
                  <li>product:{ps.name}</li>
                  <li>price:{ps.price}</li>
                  <li>discount:{ps.discount}</li>
                </ul>
            )
                
            )
        }
      </div>

      <button onClick={Logout}>Logout</button>
    </>
  )
}

export default Product