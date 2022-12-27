import React from 'react'
import LOGO from './LOGO.svg'
import akkaal from './akkaal.png'
import annan from './annan.png'
import friday from './friday.png'
import '../login/Login.css'
import '../register/Register'
import { useNavigate } from 'react-router-dom'
 function Login() {
    const navigate = useNavigate();
  return (
    <div className = "login">
        <div className="main">
            <img src={LOGO} classname="logo" alt="logo"/>
        </div>
        <div className="frame">
            <div className="img">
                    <img className="cont"  src={akkaal} alt="akkaal"/>
                    <img className="cont" src={annan} alt="annan"/>
                    <img className="cont" src={friday} alt="friday"/>
            </div>
        </div>
        <div className="sign">
            <div className="signin">Sign in
                <form>
                    <div className="auth">
                        <label htmlfor="E-mail">E-mail<br/> </label> 
                        <input style={{color:'lavender'}} type="text" className="box" placeholder="E-mail" name="E-mail" id="E-mail" />
                        <label htmlfor="pass"> Password<br/></label>
                        <input style={{color:'lavender'}} type="password" className="box" placeholder="Password" id="pass"></input>
                            <div className="sin" onClick={() => navigate('/')}> <p> Sign in</p></div>
                            <div className="forget"> <p> Forgot password</p></div>
                    </div>
                </form>
                <div className="mod">IF YOU STILL DON'T HAVE A ALAN.COM ACCOUNT,
                USE THIS OPTION TO ACCESS THE REGISTRATION FORM.
                <br/><br/>
                BY GIVING US YOUR DETAILS, PURCHASING IN ALAN.COM WILL BE 
                FASTER AND AN ENJOYABLE EXPERIENCE.
                </div>
                    <div className="sin"> <p onClick={() => navigate("/register")}>Become a Member</p></div>
            </div>
        </div>
    </div>
  )
}
export default Login;
            
           /* <br/>
            <input type="submit" value="Forget password?" />
            <br/>
            <input type="submit" value="Sign In" /> */