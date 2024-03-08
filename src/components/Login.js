import React from "react";
import { useState } from "react";
import axios from "axios";
import useSignIn from "react-auth-kit/hooks/useSignIn";

function Login() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const signIn = useSignIn();
  function handleChange(e) {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(loginData);
    /* ----------------------------- login Api Call ----------------------------- */
    const apiUrl = "http://localhost:8080/login";
    axios
      .post(apiUrl, loginData)
      .then((response) => {
        console.log("Success");

        signIn({
          auth: {
            token: response.data.token,
            expiresIn: 3600,
            tokenType: "Bearer",
          },
          userState: {
            username: loginData.username,
          },
        });
      })
      .catch((error) => {
        console.error("POST Failed");
      });
  };
  return (
    <div className="flex flex-col w-full h-full gap-3 items-center justify-center ">
      <h1 className="font-bold text-2xl">LOGIN</h1>
      <form onSubmit={submitHandler} className="flex flex-col  ">
        <label htmlFor="username">Username:</label>
        <input
          className="rounded-md  "
          onChange={handleChange}
          type="text"
          name="username"
          value={loginData.username}
        ></input>

        <label htmlFor="password">Password:</label>
        <input
          className="rounded-md  "
          onChange={handleChange}
          type="text"
          name="password"
          value={loginData.password}
        ></input>

        <div className=" flex w-full justify-center">
          <button className="bg-emerald-400 w-28 mt-2 rounded-md shadow-md">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
