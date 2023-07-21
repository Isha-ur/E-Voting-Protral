import React, { useState } from 'react'
import "./RegistrationForm.css"
import { useAuth } from '../context/Auth'
import { useNavigate , useLocation , Link} from 'react-router-dom'
import axios from 'axios'
import Layout from '../Layout/Layout'
const Frogot = () => {
    
  const[formData, setFormData] = useState({
        email:"",
        uniqueKey:"",
        newPassword:""
    })
    const[auth,setAuth] = useAuth();

    console.log(formData);

    function changeHandler(event)
    {
        setFormData(function(prevFormData){
            return({
                ...prevFormData,
                [event.target.name]:event.target.value
            })
        })
    }

    async function submitHandler(event)
    {
      event.preventDefault();
      try {
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,formData)
        if(res && res.data.success)
        {
          alert(res.data.success);
          setAuth({
            ...auth,
            user : res.data.user,
            token : res.data.token
          })
          localStorage.setItem('auth',JSON.stringify(res.data));
          
        }
        else{
          alert(res.data.message);
        }
      } catch (error) {
        alert("someting went worng")
      }
    }
  return (
    <Layout title={"Forgot Password"}>
    <div className="parent-conatiner">
        <h1 className="text-3xl m-10" >Forgot Password</h1>

      <form className="w-full max-w-sm" onSubmit={submitHandler}>
      

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-email"
            >
            Enter Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-email"
              type="email"
              defaultValue="JaneDoe@gmail.com"
              name="email"
              value={formData.email}
              onChange={changeHandler}
            />
          </div>
        </div>

        {/* here end */}

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-uniqueKey"
            >
              Unique Key
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-uniqueKey"
              type="text"
              name="uniqueKey"
              value={formData.uniqueKey}
              onChange={changeHandler}
            />
          </div>
        </div>
        {/* here */}
        
        {/* here end */}

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              New Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="password"
              placeholder="******************"
              name="newPassword"
              value={formData.password}
              onChange={changeHandler}
            />
          </div>
        </div>
        {/* here */}
        
        <div className="md:flex md:items-center">
          <div className="md:w-1/3" />
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
               Reset Password 
            </button>
          </div>
        </div>
        
      </form>
    </div>
    </Layout>
  )
}

export default Frogot