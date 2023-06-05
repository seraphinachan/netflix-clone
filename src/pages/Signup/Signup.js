import React from 'react'
import './Signup.css'

function Signup() {
    
    const register = (e) => {
        e.preventDefault();
    };

    const signIn = (e) => {
        e.preventDefault();
    };

  return (
   <div className='Signup'>
        <form>
            <h1>Sign In</h1>
            <input placeholder='Email' type='email' />
            <input placeholder='Password' type='password' />
            <button type='submit' onClick={signIn}>Sign In</button>

            <h4>
                <span className='signup__gray'>New to Netflix? </span>
                <span className='signup__link' onClick={register}>Sign Up now.</span>
            </h4>
        </form>
   </div>
  );
}

export default Signup;