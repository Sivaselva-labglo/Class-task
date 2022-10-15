import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ContentPage from "./mainpage";

export default function Login() {
  const userDetails = {
    name: '',
    dob: '',
    email: '',
    pwd: '',

  };

  const [userData, setUserData] = useState(userDetails);
  const [loginState, setLoginState] = useState(false);
  const [viewData, setViewData] = useState(false);
  // const navigate = useNavigate();

  const uname = userData.name;
  function saveData(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  function signin(e) {
    e.preventDefault()
    setLoginState(true)
    setViewData(true)
  }

  function signout(e) {
    e.preventDefault()
    setLoginState(false)
    setViewData(false)
  }

  return (
    <>
      <label>Name </label> <br />
      <input type='text' name='name' value={userData.name} onChange={saveData} />
      <br /> <br />

      <label>DoB </label> <br />
      <input type='date' name='dob' value={userData.dob} onChange={saveData} />
      <br /> <br />

      <label>Email </label> <br />
      <input type='email' name='email' value={userData.email} onChange={saveData} />
      <br /> <br />

      <label>Password </label> <br />
      <input type='password' name='pwd' value={userData.pwd} onChange={saveData} />
      <br /> <br />


      {
        loginState ?
          <>
            <button onClick={signout}>Logout</button>
          </>
          :
          <>
            <button onClick={signin}>Login</button>
          </>
      }

      {
        viewData ?
          <>
            <p>{userData.name}</p>
            <p>{userData.dob}</p>
            <p>{userData.email}</p>
            <p>{userData.pwd}</p>
          </>
          :
          <>
          </>
      }
      
      <ContentPage uname = {uname} />

    </>
  )
}