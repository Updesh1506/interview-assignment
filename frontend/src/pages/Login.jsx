import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import axios from "axios"

const Login = () => {
    const [formData,setFormData] = useState({email:"",password:""})
    const navigate =useNavigate()

    useEffect(()=>{
      const token = localStorage.getItem("token")
      if(token) navigate("/dashboard",{replace:true})
    },[])

    const handleChange =(e) =>setFormData({...formData,[e.target.name]:e.target.value})

    const handleSubmit =async(e) =>{
        e.preventDefault()
        try{
            const res = await axios.post("http://localhost:5000/api/login",formData)
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("user",JSON.stringify(res.data.user))
           
            navigate("/dashboard",{replace:true})

        }
        catch(err){
          console.log("login error response:",err.response)
            alert("login failed")
        }
    }
  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1950&q=80')" }}>
     <div className='backdrop-blur-md bg-white/10 border border-white/30 rounded-2xl p-8 w-full max-w-md shadow-xl'>
     <h2 className='text-white text-3xl font-bold mb-6 text-center'>Login</h2>
     <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        
        <input className='bg-transparent border-b border-white text-white px-2 py-1 focus:outline-none' type="email" name='email' placeholder='Email' onChange={handleChange} required  />
        <input className='bg-transparent border-b border-white text-white px-2 py-1 focus:outline-none' type="password" name='password' placeholder='Password' onChange={handleChange} required />
        
        <button className='mt-4 py-2 rounded-md bg-white text-black font-semibold hover:bg-gray-200'>Login</button>
        <p className='mt-4 text-center text-sm text-white'> Dont't have an account?{" "}
            <Link to="/register" className="underline">Register</Link>
             </p>
     </form>
     </div>
    </div>
  )
}

export default Login
