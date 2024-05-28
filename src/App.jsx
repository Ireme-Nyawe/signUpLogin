import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
const App = () => {
  const [option, setOption] = useState("login");
  function handleNavigateLogin() {
    setOption("login");
  }
  function handleNavigateSignup() {
    setOption("signup");
  }

  return (
    <>
      <h2>Here We Goo</h2>
      {option == "login" ? (
        <Login handle={handleNavigateSignup}></Login>
      ) : (
        <Signup handle={handleNavigateLogin}></Signup>
      )}
    </>
  );
};

export default App;
