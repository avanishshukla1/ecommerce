import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import validation from './SignupValidation';

const Signup = () => {

  const [values, setValues] = useState({
    name:'',
    email:'',
    password: ''
  })

const [errors, setErrors] = useState([])
const handleInput = (event)=> {
  setValues(prev =>({...prev, [event.target.name]: [event.target.value] }) )
}

const handleSubmit = (event)=>{
  event.preventDefault();
  setErrors(validation(values));
}

  return (
    <>
   <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
          <h2> Signup Now </h2>
    <form action="" onSubmit={handleSubmit}>
    <div className='mb-3'>
        <label htmlFor='Name' ><strong> Name </strong>  </label>
        <input type='text' onChange={handleInput} className='form-control' name='name' placeholder="Enter Name" required  />
        {errors.name && <span className='text-danger'>{errors.name} </span> }
    </div>
    <div className='mb-3'>
        <label htmlFor='Email' ><strong> Email </strong>  </label>
        <input type='email' onChange={handleInput} className='form-control' name='email' placeholder="Enter Email" required />
        {errors.email && <span className='text-danger'>{errors.email} </span> }
    </div>
    <div className='mb-3'>
        <label htmlFor='Password'> <strong> Password </strong>  </label>
        <input type='password' onChange={handleInput} className='form-control'  name='password'  placeholder="Enter Password"/>
        {errors.password && <span className='text-danger'>{errors.password} </span> }
    </div>
    <button type='submit' className='btn btn-primary border w-100'> Create Account </button>
    <p> You are Agree Your Terms & Policies </p>
    <Link to="/" className='btn btn-success'> Login </Link>
</form>
</div>
  </div>  
    
    </>
  )
}

export default Signup