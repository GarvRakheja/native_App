import React from 'react'

const LoginValidation = (LoginField) => {
 const error = {}

 const lodinPassword_pattern = /^[^/s]{8}$/

 if(LoginField.password === ""){
    error.password = "password is required"
}else if(!password_pattern.test(LoginField.password)){
    error.password = "password did'nt match"
}

return error

}

export default LoginValidation