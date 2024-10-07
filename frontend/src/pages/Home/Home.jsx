import React from 'react'
import "./home.css"
import SideBar from '../../components/SideBar'
import Post from '../../components/Post'

const Home = () => {

  let postsdata=[
    {
      username:"virat kohli",
      dp:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/01/04/13/virat-kohli.jpg",
      desc:"I am the king of cricket",
      postpic:"https://circleofcricket.com/post_image/post_image_9632bcb.jpg",
      likes:10786747,
    },
    {
      username:"rohit sharma",
      dp:"https://i.pinimg.com/originals/10/2d/1b/102d1b8b9ce8f7af9ba5e771f3ed8c91.jpg",
      desc:"hitman 🏏❤️",
      postpic:"https://www.india.com/wp-content/uploads/2022/09/rohit-sharma.png",
      likes:7645713
    },

    {
      username:"Robert downey jr",
      dp:"https://media1.popsugar-assets.com/files/thumbor/HwtAUAufmAZv-FgGEIMJS2eQM-A/0x1:2771x2772/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/03/30/878/n/1922398/eb11f12e5e825104ca01c1.02079643_/i/Robert-Downey-Jr.jpg",
      desc:"Iron man",
      postpic:"http://getwallpapers.com/wallpaper/full/d/e/e/719082-robert-downey-jr-iron-man-wallpaper-2200x1600-for-android-40.jpg",
      likes:8758746

    },
    {
      username:"virat kohli",
      dp:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/01/04/13/virat-kohli.jpg",
      desc:"🏏🔥",
      postpic:"https://tse3.mm.bing.net/th?id=OIP.d8vENBEh7I-QqbM7QqylSgHaJQ&pid=Api&P=0&h=180",
      likes:16476747,
    },
    {
      username:"rohit sharma",
      dp:"https://i.pinimg.com/originals/10/2d/1b/102d1b8b9ce8f7af9ba5e771f3ed8c91.jpg",
      desc:"🏆",
      postpic:"https://static.toiimg.com/photo/msid-79165603/79165603.jpg",
      likes:76459913
    },
  ]

  return (
    <div className='home'>
      <SideBar />
      <div className='feed'>
     {postsdata.map((igpost)=> <Post igpost={igpost} />)}
      </div>
    
    </div>
  )
}

export default Home
