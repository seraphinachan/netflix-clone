import React, { useState } from 'react'
<<<<<<< HEAD:src/Screens/LoginScreen.js
import './LoginScreen.css'
import SignupScreen from './SignupScreen'
=======
import './Login.css'
>>>>>>> 279945981d2df53c724781b7a1ab16a7ea6b8657:src/pages/Login/Login.js

function Login() {
    const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
        <div className='loginScreen__background'>
            <img
                className='loginScreen__logo' 
                src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
                alt='' 
            />
            <button onClick={() => setSignIn(true)} className='loginScreen__button'>Sign In</button>
        
            <div className='loginScreen__gradient' />
        </div>

        <div className='loginScreen__body'>
            {signIn ? (
                <SignupScreen />
            ) : (
            <>
                <h1>Unlimited films, TV programmes and
                more.</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>
                    Ready to watch? Enter your email to create
                    create or restart your membership.
                </h3>

                <div className='loginScreen__input'>
                    <form>
                        <input type='email' placeholder='Email Address' />
                        <button
                        onClick={() => setSignIn(true)}
                        className='loginScreen__getStarted'>
                        GET STARTED
                        </button>
                    </form>
                </div>
            </>
            )}
        </div>
    </div>
  );
}

export default Login