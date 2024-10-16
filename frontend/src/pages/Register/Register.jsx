import React, { useRef } from 'react'
import "./register.css"
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const Register = () => {
    let email= useRef()
    let fname=useRef()
    let uname=useRef()
    let password=useRef()
    let navigate = useNavigate()

    const Regfun = async()=>{ 
     if(email.current.value.length == 0 || fname.current.value.length==0 || uname.current.value.legth==0 || password.current.value.legth ==0){
        console.log("please fill all feilds")
     }else{
       

           await axios.post("http://localhost:8888/ig/auth/register", {
           
            
            "username":uname.current.value,
            "email":email.current.value,
            "password":password.current.value
           })


           console.log(user)
           navigate('/login')

     }
    }
  return (
    <div class="register">

    <div class="register-image"></div>

    <div class="register-feilds">
        <div class="input-feilds">
        <div class="logo">
            <img src="https://fontmeme.com/images/instagram-new-logo.png" />
        </div>

        <div class="forgot">
            <div class="fg"> Sign up to see photos and videos from your friends.</div>
           
        </div>


        <div class="details">
            <input placeholder="email" ref={email} id='email' />
            <input placeholder="Full name" ref={fname} />
            <input type="text" id="username" name="username" placeholder="Username" ref={uname} />
            <input type="password" id="password" name="password" placeholder="Password" ref={password}/>
            <button onClick={Regfun}>Sign up</button>
        </div>
       


        </div>

        <div class="sign-up">
            <p>Have an account? <a id="sup" href="/login">Log in</a></p>
        </div>

        <div class="apps">
            <p>Get the apps</p>
            <div class="app-stores">
                <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D25A9ECA6-51ED-418E-9167-8F0BD7FDA9CD%26utm_campaign%3DunifiedHome%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge">
                    <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" class="logos" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D25A9ECA6-51ED-418E-9167-8F0BD7FDA9CD%26utm_campaign%3DunifiedHome%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge">
                    <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" class="logos"/>
                </a>
            </div>
        </div>


    </div>

</div>
  )
}

export default Register
