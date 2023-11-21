import axios from 'axios';
import React, { useState } from 'react'
import Validation from './Validation';

export const SignUp = () => {

  const [signUpField, setSignUpField] = useState({
    username : "",
    email : "",
    phone : "",
    password : ""
  })

  const [error, setError] = useState({})

  const handleSignUpChange = (e) => {
    const {name, value} = e.target;
    setSignUpField({...signUpField, [name] : value})
  }

  const handleSignUpSubmit = async (e) => {
    e.preventDefault()

    const ValidationErrors = Validation(signUpField);

    if(Object.keys(ValidationErrors).length !== 0){
      setError(ValidationErrors)
    }else{
      try{
        const SignUpResponse = await axios.post("https://dummyjson.com/users/add", signUpField)
  
        console.log("SignUpResponse", SignUpResponse)
  
        // setError(Validation(signUpField))
  
      }catch(err){
        console.log(err)
      }
    }    
  }

  return (
    <div className='signUpForm'>
    <div className='signUpFormHeaing'>
      <h1>TeamUP</h1>
      <p>Please fill in all details</p>
    </div>
    <form>
      <input
        placeholder='username'
        name='username'
        value={signUpField.username}
        onChange={handleSignUpChange}
      />
      {error.username && <p className='errorMessage'>{error.username}</p>}
      <input
        placeholder='Email address'
        name='email'
        value={signUpField.email}
        onChange={handleSignUpChange}
      />
      {error.email && <p className='errorMessage'>{error.email}</p>}
      <input
        placeholder='Phone number'
        name='phone'
        value={signUpField.phone}
        onChange={handleSignUpChange}
      />
      {error.phone && <p className='errorMessage'>{error.phone}</p>}
      <input
        placeholder='Password'
        name='password'
        value={signUpField.password}
        onChange={handleSignUpChange}
      />
      {error.password && <p className='errorMessage'>{error.password}</p>}
    </form>
    <div className='signUpButton'>
      <button onClick={handleSignUpSubmit}>Signup</button>
    </div>
  </div>
  )
}
export default SignUp;

