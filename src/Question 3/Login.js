import React from "react";
import Input from "./Input";
import Button from "./Button";

function Login(props) {
  return (
    <div>
        <h1>Please Login</h1>
      <form>
        <Input type="text" placeholder="edd" />
        <Input type="text" placeholder="cddd" />
        <Button type="submit" btnName="Login" />
      </form>
    </div>
  );
}

export default Login;
