import React from "react";
import Login from "./Login";

let isLoggedIn=false;

function Home(){
    return(
        <div>
            {(isLoggedIn)?(<h1>Home</h1>):(<Login />)}
        </div>
    )
}

export default Home;