import React from 'react'
import "./profile.css"
import SideBar from '../../components/SideBar'

const Profile = () => {
  return (
    <div className="profile-box">
      <SideBar />
      <div className="profile">
        <div className='profile-things'>
          <div className='profile-container'>
            <div className='profile-picture'>
              <input type='file'  className='pp' />
            </div>
            <div className='profile-info'>
              <div classname="username-box" id='ub'>
                <p>Shanmukh.t</p>
                <button className='setting'>Edit Profile</button>
                <button className="setting">View Archeive</button>
              </div>

              <div className='user-p'>
                <p>0 posts</p>
                <p>0 following</p>
                <p>0 followers</p>

              </div>
            </div>

          </div>

        </div>

      </div>
    
    </div>
  )
}

export default Profile
