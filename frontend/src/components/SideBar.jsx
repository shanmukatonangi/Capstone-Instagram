import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAlternateEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";

const SideBar = () => {
  return (
    <div>
      <div class="d-flex flex-column flex-shrink-0 p-3 " style={{width:"280px",backgroundColor:"black"}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <img class="fs-4"  style={{height:"30px"}} src='https://i.pinimg.com/originals/d5/1d/09/d51d097fbbd5cdc277d80c605ad1c455.png'/>
    </a>
    <hr /> 
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link text-white" aria-current="page" style={{fontSize:"18px"}}>
         <IoHomeOutline style={{margin:"20px",marginBottom:"30px",fontWeight:"bold",fontSize:"25px"}} />
         
          Home
        </a>
      </li>
     
      <li class="nav-item">
        <a href="#" class="nav-link text-white" aria-current="page" style={{fontSize:"18px"}}>
         <IoSearch style={{margin:"20px",fontWeight:"bold",fontSize:"25px"}} />
         
         Search
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-white" aria-current="page" style={{fontSize:"18px"}}>
         <FaRegHeart style={{margin:"20px",fontWeight:"bold",fontSize:"25px"}} />
         
        Notifications
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-white" aria-current="page" style={{fontSize:"18px"}}>
         <BiMoviePlay style={{margin:"20px",fontWeight:"bold",fontSize:"25px"}} />
         
         Reels
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-white" aria-current="page" style={{fontSize:"18px"}}>
         <CgProfile style={{margin:"20px",fontWeight:"bold",fontSize:"25px"}} />
         
          Profile
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-white" aria-current="page" style={{fontSize:"18px"}}>
         <GiHamburgerMenu style={{margin:"20px",fontWeight:"bold",fontSize:"25px"}} />
         
          More
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-white" aria-current="page" style={{fontSize:"18px"}}>
         <MdAlternateEmail style={{margin:"20px",fontWeight:"bold",fontSize:"25px"}} />
         
         Threads
        </a>
      </li>
     
     
      <li class="nav-item">
        <a href="#" class="nav-link text-white" aria-current="page" style={{fontSize:"18px"}}>
         <RiMessengerLine style={{margin:"20px",fontWeight:"bold",fontSize:"25px"}} />
         
         Messages
        </a>
      </li>
    </ul>
    <hr />
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
    </div>
  )
}

export default SideBar
