import React from 'react'
import LOGO from './LOGO.svg'
import akkaal from './akkaal.png'
import annan from './annan.png'
import friday from './friday.png'
import '../login/Login.css'
import '../login/Login'
import { useNavigate } from 'react-router-dom'
 function Register() {
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
        <div className="bm">BECOME A MEMBER
          <form>
            <div className="auth">
              <label htmlfor="E-mail">E-mail<br/> </label> 
              <input style={{color:'lavender'}} type="text" className="box" placeholder="E-mail" name="E-mail" id="E-mail" />
              <label htmlfor="pass">Create Password<br/></label>
              <input style={{color:'lavender'}} type="password" className="box" placeholder="Password" id="pass"></input>
              <label htmlfor="dob">Date of Birth<br/></label>
              <input style={{color:'lavender'}} type="date" className="box" id="dob"></input>
            </div>
          </form>
          </div>
          <div className="term">
            <p> By clicking ‘Become a member’, I agree to the H&M Membership <strong className="T">Terms and conditions.</strong><br/><br/>
            To give you the full membership experience, we will process your personal data in accordance with the H&M's <strong className="T">Privacy Notice.</strong>
            </p>
            <div className="agree"><p onClick={() => navigate("/login")}>Become a Member</p></div>
          </div>
      </div>
    </div>

  )
}
export default Register;