import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialFormValues = {
  username: "",
  password: ""
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [formValues, setFormValues] = useState(initialFormValues)
  const history = useHistory()

  const changeHandler = e => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  const submitHandler = e => {
    e.preventDefault()
    axiosWithAuth()
    .post("/api/login", formValues)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.payload)
      history.push('/protected')
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={submitHandler}>
        
          <input
           type="text" 
          name="username" 
          value={formValues.username}
           onChange={changeHandler}
           placeholder="username" >
          </input>


          <input
           type="password" 
          name="password" 
          value={formValues.password}
           onChange={changeHandler}
           placeholder="password" >
          </input>

          <button>Log in</button>
        
      </form>
    </>
  );
};

export default Login;
