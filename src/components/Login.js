import React, { useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { TfiTwitter } from "react-icons/tfi";
import axios from 'axios';
import LoginValidation from './LoginValidation';

export const Login = () => {

    const [LoginField, setLoginField] = useState({
        username: "",
        password: ""
    })

    const [ loginError, setLoginError ] = useState({})

    const handleLoginChnage = (e) => {
        const { name, value } = e.target;
        setLoginField({ ...LoginField, [name]: value })
    }

    const handleLogin = async (e) => {
        e.preventDefault()

        const username = LoginField.username;
        const password = LoginField.password;

        const LoginValidationError = LoginValidation(LoginField)

        if (Object.keys(LoginValidationError).length !== 0){
            setLoginError(LoginValidationError)
        }else{
            try {
                const loginResponse = await axios.post("https://dummyjson.com/auth/login", { username, password });
                localStorage.setItem("token", loginResponse.data.token);
                console.log(loginResponse);
                if (loginResponse.data.token) {
                    setLoginField({
                        username: "",
                        password: ""
                    })
                }
            } catch (err) {
                console.log(err);
            }
        }
        
    }


    return (
        <>

            <div className='loginForm'>
                <div className='LoginFormHeaing'>
                    <h1>TeamUP</h1>
                    <p>Please fill in all details</p>
                </div>
                <form>
                    <input placeholder='username' type="text" name='username' value={LoginField.username} onChange={handleLoginChnage} /><br />
                    <input placeholder='Password' type="password" name='password' value={LoginField.password} onChange={handleLoginChnage} />
                    {loginError.password && <p className='LoginErrorMessage'>{loginError.password}</p>}
                </form>
                <div className='forgotPassword'>
                    <p>Forgot Your Password?</p>
                </div>
                <div className='loginButton'>
                    <button onClick={handleLogin}>Login</button>
                </div>
                <div className='SocialMediaIcons'>
                    <span><FaInstagram className='instaIcon' /></span>
                    <span><TiSocialFacebook className='instaIcon' /></span>
                    <span><TfiTwitter className='instaIcon' /></span>
                </div>
            </div>
        </>

    )
}
export default Login;
