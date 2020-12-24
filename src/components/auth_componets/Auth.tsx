import React, { useState, useEffect } from "react";
import Login from "./Login";
import Register from "./Register";

const Auth: React.FC = () => {
  const [user, setUser] = useState({});
  useEffect(() => {}, [user]);
  return (
    <>
      <Login />
      <Register />
    </>
  );
};

export default Auth;
