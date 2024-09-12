import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <div className="login">

        <div className="login-image"></div>

        <div className="login-feilds">
            <div className="input-feilds">
            <div className="logo">
                <img src="https://fontmeme.com/images/instagram-new-logo.png" />
            </div>
            <div className="details">
                <input type="text" id="username" name="username" placeholder="Phone number , email , username" />
                <input type="password" id="password" name="password" placeholder="Password" />
                <button>log in</button>
            </div>
            <div className="forgot">
                <div className="fg"> <img src="https://tse4.mm.bing.net/th?id=OIP.wOPYZ0FBrg5cMj5uwD00nwHaHa&pid=Api&P=0&h=180" /><p>Login with Facebook</p></div>
                <a href="#">Forgot password?</a>
            </div>


            </div>

            <div className="sign-up">
                <p>Don't have an account? <a id="sup" href="/register">Sign Up</a></p>
            </div>

            <div className="apps">
                <p>Get the apps</p>
                <div className="app-stores">
                    <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D25A9ECA6-51ED-418E-9167-8F0BD7FDA9CD%26utm_campaign%3DunifiedHome%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge">
                        <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" className="logos" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D25A9ECA6-51ED-418E-9167-8F0BD7FDA9CD%26utm_campaign%3DunifiedHome%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge">
                        <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" className="logos"/>
                    </a>
                </div>
            </div>


        </div>

    </div>
  )
}

export default Login
