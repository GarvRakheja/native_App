import React from 'react'

const Validation = (signUpField) => {
  const error = {}

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^/s@]{2,6}$/;
  const phone_pattern = /^\d{10,}$/
  const password_pattern = /^[^\s]{6,}$/;

    if(signUpField.username === ""){
        error.username = "username is required"
    }

    if(signUpField.email === ""){
        error.email = "email is required!"
    }else if(!email_pattern.test(signUpField.email)){
        error.email = "email did'nt match"
    }

    if(signUpField.phone === ""){
        error.phone = "phone number is required"
    }else if(!phone_pattern.test(signUpField.phone)){
        error.phone = "phone number did'nt match"
    }

    if(signUpField.password === ""){
        error.password = "password is required"
    }else if(!password_pattern.test(signUpField.password)){
        error.password = "password did'nt match"
    }

    return error; 

}

export default Validation