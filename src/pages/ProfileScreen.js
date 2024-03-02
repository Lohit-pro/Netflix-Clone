import React from 'react'
import './ProfileScreen.css'
import Nav from '../components/Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import { auth } from '../firebase'

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen__body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen__info'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='net_face'></img>
          <div className='profileScreen__details'>
            <h2>{user.email}</h2>
            <div className='profileScreen__plans'>
            <h3>Plan : Premium Plan 4K + HDR</h3>
              <button onClick={() => auth.signOut()} className='profileScreen__signout'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen