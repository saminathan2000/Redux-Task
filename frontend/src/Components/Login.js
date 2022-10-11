import axios from 'axios'
import React from 'react'
import "../styles/Login.css"

export default function Login({navigation}) {
  function onLogin(event){
      event.preventDefault();
      const username = document.getElementById("username");
      const password = document.getElementById("password");
      console.log(username)
      axios.post("http://localhost:4000/auth/",{email:username.value,password:password.value}).then((response) => {
      console.log(response);
      if(response.status==200){
        navigation.navigate("Home")
      }
    });
  }
  return (
    <div>
      <div className='background' ></div>
      <div className='container'>
        
        <form className='uk-flex uk-flex-column uk-flex-middle'>
            <h2>Login</h2>
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
            <button onClick={(event)=>{onLogin(event)}} className='btn-grad'>Log In ...</button>
        </form>
      </div>
    </div>
  )
}
