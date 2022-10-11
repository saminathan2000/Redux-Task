import axios from 'axios'
import React from 'react'
import "../styles/Login.css"

export default function Register() {
  function onRegister(event){
      event.preventDefault();
      const username = document.getElementById("username");
      const password = document.getElementById("password");
      const mobile = document.getElementById("mobile");
      const name = document.getElementById("name");
      axios.post("http://localhost:4000/user/",{email:username.value,password:password.value,phone:mobile.value,name:name.value}).then((response) => {
      console.log(response);
    });
  }
  return (
    <div>
      <div className='background' ></div>
      <div className='container'>
        
        <form className='uk-flex uk-flex-column uk-flex-middle'>
            <h2>Register</h2>
            <div className="uk-margin">
                <div className="uk-inline">
                    <span className="uk-form-icon" uk-icon="icon: user"></span>
                    <input id="name" className="uk-input" type="text" placeholder="name"/>
                </div>
            </div>
            <div className="uk-margin">
                <div className="uk-inline">
                    <span className="uk-form-icon" uk-icon="icon: user"></span>
                    <input id="username" className="uk-input" type="text" placeholder="username"/>
                </div>
            </div>

            <div className="uk-margin">
                <div className="uk-inline">
                    <span className="uk-form-icon uk-form-icon" uk-icon="icon: lock"></span>
                    <input id='password' className="uk-input" type="password" placeholder="password"/>
                </div>
            </div>

            <div className="uk-margin">
                <div className="uk-inline">
                    <span className="uk-form-icon uk-form-icon" uk-icon="icon: phone"></span>
                    <input id='mobile' className="uk-input" type="number" placeholder="mobile"/>
                </div>
            </div>
            <button onClick={(event)=>{onRegister(event)}} className='btn-grad'>Register ...</button>
        </form>
      </div>
    </div>
  )
}
