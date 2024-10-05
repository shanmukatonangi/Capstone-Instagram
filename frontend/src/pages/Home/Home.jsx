import React from 'react'
import "./home.css"
import SideBar from '../../components/SideBar'
import Post from '../../components/Post'

const Home = () => {
  return (
    <div className='home'>
      <SideBar />
      <div className='feed'>
<Post />
<Post />
<Post />
      </div>
    
    </div>
  )
}

export default Home
