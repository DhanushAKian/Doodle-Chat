// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup.js'

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  })

  const {loading,signup}=useSignup()

  const handleCheckboxChange = (gender) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      gender
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(inputs)
    await signup(inputs)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding '>
        <h1 style={{ color: 'black', fontFamily: 'monospace' }} className='text-3xl font-semibold text-center text-gray-400'>Signup
          <span> DoodChat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text' style={{ color: 'black' }}>Full Name</span>
            </label>
            <input type="text" placeholder='Enter Name' className='w-full input input-bordered h-10'
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className='label p2'>
              <span style={{ color: 'black' }} className='text-base label-text'>User Name</span>
            </label>
            <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>

          <div>
            <label className='label p2'>
              <span style={{ color: 'black' }} className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div>
            <label className='label p2'>
              <span style={{ color: 'black' }} className='text-base label-text'>Confirm Password</span>
            </label>
            <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10'
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <Link to="/login" className='text-sm hover:underline hover:text-blue-800 mt-2 inline-block' style={{ color: 'black' }}>
            Already have an Account?
          </Link>

          <div>
            <button className='btn btn-block btn-sm mt-2'
            disabled={loading}>{loading?<span className='loading loading-spinner'></span>:'Sign Up'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp