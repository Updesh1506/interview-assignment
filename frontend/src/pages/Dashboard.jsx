import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
    const [user,setUser] =useState({})
    const [avatars,setAvatars] = useState([])
    const navigate =useNavigate()

    useEffect(()=>{
        const storedUser = localStorage.getItem("user")
        if(storedUser) setUser(JSON.parse(storedUser))
    },[])

    useEffect(() => {
      const dummyUsers = [
        { name: "John Doe", username: "john_doe" },
        { name: "Jane Smith", username: "jane_smith" },
        { name: "Albert Newton", username: "albert_newton" },
        { name: "Riya Sharma", username: "riya_sharma" },
        { name: "Amit Verma", username: "amit_verma" },
      ];
    
      const usersWithAvatars = dummyUsers.map((user) => ({
        ...user,
        avatar: `https://robohash.org/${encodeURIComponent(user.name)}?set=set5`
      }));
    
      setAvatars(usersWithAvatars);
    }, []);
    

    const logout =() =>{
        localStorage.clear()
        navigate("/login")
    }
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 sm:p-12'>
      <div className='max-w-5xl mx-auto'>
      <div className='bg-white p-8 rounded-xl shadow-xl mb-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-4'> Welcome , <span className='text-blue-600' >{user.name}</span></h1>
        <p className='text-gray-600 mb-1'><strong>Email:</strong>{user.email}</p>
        <p className='text-gray-600 mb-4' ><strong>Date of Birth:</strong> {new Date(user.dob).toLocaleDateString("en-US", {
               year: 'numeric',
                month: 'long',
                day: 'numeric'
          })}</p>
        <button onClick={logout} className='mt-2 px-5 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all'>Logout</button>
      </div>

      <div className='bg-white p-8 rounded-xl shadow-lg'>
        <h2 className='text-2xl mb-6 text-gray-800 font-bold'>Dummy data Table</h2>
        <div className='overflow-x-auto'>
        <table className='min-w-full table-auto border-collapse'>
            <thead className='bg-blue-100'>
                <tr>
                    <th className='border px-6 py-3 text-left text-gray-700'>Id</th>
                    <th className='border px-6 py-3 text-left text-gray-700'>Name</th>
                    <th className='border px-6 py-3 text-left text-gray-700'>Status</th>
                </tr>
            </thead>
            <tbody>
                {avatars.map((user,index)=>(
                  <tr key={index} className='hover:bg-gray-50'>
                    <td className='border px-6 py-3'><img src={user.avatar} alt={user.name} className='w-12 h-12 rounded-full mx-auto shadow-md'  /></td>
                    <td className='border px-6 py-3 font-medium text-gray-800'>{user.name}</td>
                    <td className='border px-6 py-3 text-gray-600'>{user.username}</td>
                  </tr>
                ))}
            </tbody>
        </table>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard
