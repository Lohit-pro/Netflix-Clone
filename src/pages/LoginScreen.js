import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen'
import { Link } from 'react-router-dom'

function LoginScreen() {

  const [signIn, setSignIn] = useState(false);
  return (
    <div className='loginScreen'>
    <div className='loginScreen__nav'>
      <div className='loginScreen__background'>
        <Link to='/'><img className='loginScreen__logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='' /></Link>
      </div>
      <button onClick={() => setSignIn(true)} className='loginScreen__button'>
        Sign In
      </button>
    </div>
      <div className='loginScreen__gradient' />
      <div className='loginScreen__body'>
      {
        signIn ? <SignUpScreen /> : (
          <>
          <h1>Unlimited movies, TV shows and more...</h1>
          <h2>Watch anywhere. Cancel at anytime.</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
          <div className='loginScreen__input'>
            <form>
              <input type='email' placeholder='Email Address' />
              <button onClick={() => setSignIn(true)} className='loginScreen__input--button'>GET STARTED</button>
            </form>
          </div>
        </>
        )
      }
        
      </div>
    </div>
  )
}

export default LoginScreen