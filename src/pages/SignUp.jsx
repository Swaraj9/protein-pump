import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext';
import '../styles/signUp.css'

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const {signUp} = useUserAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try{
            await signUp(email, password);
            navigate('/');
        }catch(err){
            setError(err.message);
        }
    }

  return (
    <div className='signUp'>
        <div className='signUpMain'>
            <form onSubmit={handleSubmit}>
                <div className='signUpEmail'>
                    <div className='signUpEmailText'>Enter Your Email</div>
                    <input 
                        type='email'
                        placeholder='abc@def.com'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className='signUpPassword'>
                    <div className='signUpPasswordText'>Password</div>
                    <input 
                        type='password'
                        placeholder='******'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <button type='submit'>Sign Up</button>
                {error && <div className='signUpError'>{error}</div>}
            </form>
            <div className='signUpLogin'>
                Already have an account? <Link to="/">Log In</Link>
            </div>
        </div>
    </div>
  )
}

export default SignUp