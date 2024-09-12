import React from 'react'
import "./register.css"

const Register = () => {
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
            <input placeholder="Mobile Number" />
            <input placeholder="Full name" />
            <input type="text" id="username" name="username" placeholder="Username" />
            <input type="password" id="password" name="password" placeholder="Password" />
            <button>Sign up</button>
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
