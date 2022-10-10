import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const {logIn, googleSignIn} = useUserAuth();

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");
        try{
            await logIn(email, password);
            navigate("/home")
        }catch(err){
            setError(err.message);
        }
    }

    const handleGoogleSignIn = async() => {
        try{
            await googleSignIn();
            navigate('/home');
        }catch(err){
            setError(err.message);
        }
    }

  return (
    <div className='login'>
        <div className='loginMain'>
            <form onSubmit={handleSubmit}>
                <div className='loginEmail'>
                    <div className='loginEMailText'>Enter Your Email</div>
                    <input 
                        type='email'
                        placeholder='abc@def.com'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className='loginPassword'>
                    <div className='loginPasswordText'>Password</div>
                    <input 
                        type='password'
                        placeholder='******'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <button type='submit'>Log In</button>
                {error && <div className='loginError'>{error}</div>}
            </form>
            <button onClick={handleGoogleSignIn}>Log In With Google</button>
            <div className='loginSignUp'>
                Dont have an account yet? <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    </div>
  )
}

export default Login