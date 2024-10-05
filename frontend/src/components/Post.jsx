import React from 'react'
import "./post.css"
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { TiLocationArrowOutline } from "react-icons/ti";
import { CiBookmark } from "react-icons/ci";

const Post = () => {
  return (
    <div className='post'>
        <div className='pp'>
            <img src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/01/04/13/virat-kohli.jpg' />
            <p>Virat Kohli</p>
            <h4>5d</h4>

        </div>

        <div className='post-pic'>
            <img src='https://circleofcricket.com/post_image/post_image_9632bcb.jpg' />

        </div>
        <div className='icons'>
            <div className='icons-heart'>
                <FaRegHeart style={{color:"white",fontSize:"30px"}} />
                <FaRegComment style={{color:"white",fontSize:"30px"}} />
                <TiLocationArrowOutline  style={{color:"white",fontSize:"40px",fontWeight:"bolder"}}/>
                
            </div>
            <div className='icons-save'>
                <CiBookmark style={{color:"white",fontSize:"30px"}} />
            </div>


        </div>
        <p className='likes'>1,45,455 likes</p>

        <div className='desc'>
            <p>Virat Kohli</p>
            <p>🏏🏏</p>
        </div>
      
    </div>
  )
}

export default Post
