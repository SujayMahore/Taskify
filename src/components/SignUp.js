import React from "react";
import { useState } from "react";
import Axios from "axios";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({ username: "", password: "" });
  function handleChange(e) {
    const { name, value } = e.target;

    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(signUpData);
    /* ----------------------------- signup Api Call ----------------------------- */
    const apiUrl = "http://localhost:8080/login";
    Axios.post(apiUrl, signUpData)
      .then((response) => {
        console.log("Success");
      })
      .catch((error) => {
        console.error("POST Failed");
      });
  };
  return (
    <div className="flex flex-col w-full h-full gap-3 items-center justify-center ">
      <h1 className="font-bold text-2xl">Register</h1>
      <form onSubmit={submitHandler} className="flex flex-col ">
        <label htmlFor="username">
          Username:
         
        </label>
        <input
            className="rounded-md  "
            onChange={handleChange}
            type="text"
            name="username"
            value={signUpData.username}
          ></input>
        <label htmlFor="password">
          Password:
          
        </label>
        <input
            className="rounded-md  "
            onChange={handleChange}
            type="text"
            name="password"
            value={signUpData.password}
          ></input>
        <div className=" flex w-full justify-center">
          <button className="bg-emerald-400 w-28 mt-2 rounded-md shadow-md">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
