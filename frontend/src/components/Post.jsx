import React from 'react'
import "./post.css"
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { TiLocationArrowOutline } from "react-icons/ti";
import { CiBookmark } from "react-icons/ci";

const Post = ({igpost}) => {
  return (
    <div className='post'>
        <div className='pp'>
            <img src={igpost.dp} />
            <p>{igpost.username}</p>
            <h4>5d</h4>

        </div>

        <div className='post-pic'>
            <img src={igpost.postpic} />

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
        <p className='likes'>{igpost.likes} likes</p>

        <div className='desc'>
            <p>{igpost.username}</p>
            <p>{igpost.desc}</p>
        </div>
      
    </div>
  )
}

export default Post
