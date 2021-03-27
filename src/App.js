import React, { Component,useState } from 'react';
import axios from 'axios';
import './App.css';
import { API_BASE_URL } from './config'
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from "react-router-dom";
// import 'bootstrap/dist/js/bootstrap.bundle'

function App() {
  // constructor (props) {
  //       super(props);
  //       this.state = {
  //           name: '',
  //           errorMessage: '',
  //           error: false,
  //           isLoading: false
  //       }
  //       this.handleChange = this.handleChange.bind(this);
  //       this.onSubmit = this.onSubmit.bind(this);
  //   }
  const [email, setName] = useState('')
  const [password, setPass] = useState('')
  const [showCard, setShowCard] = useState(true)
  const changeEmailHandler = event => setName(event.target.value)
  const changePasswordHandler = event => setPass(event.target.value)

const onSubmitButton = (e) => {
        e.preventDefault();
         
        let data = JSON.stringify({
          email: email,
          password: password
        });

        // const response = axios.post(API_BASE_URL + '/checklogin',data,{headers:{"Content-Type" : "application/json"}});
        axios.post(API_BASE_URL + '/checklogin', {
            "email": email,
            "password": password
        })
        .then(function (response) {
            console.log(response);
            window.location.href = API_BASE_URL + '/';
            // console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        // console.log(response);
    }
  return (
      <div id="login">
        <h3 className="text-center text-white pt-5">UNIVERSITY ONLINE</h3>
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                          <form id="login-form" class="form" onSubmit={onSubmitButton}>
                          <h3 class="text-center text-info">Login</h3>
                          <div class="form-group">
                              <label for="username" class="text-info">Username:</label><br/>
                              <input type="text" name="email" id="email" class="form-control" onChange={changeEmailHandler}/>
                          </div>
                          <div class="form-group">
                              <label for="password" class="text-info">Password:</label><br/>
                              <input type="password" name="password" id="password" class="form-control" onChange={changePasswordHandler}/>
                          </div>
                          <div class="form-group">
                                <input type="submit" name="submit" class="btn btn-info btn-md" value="Submit"/>
                          </div> 
                          </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
