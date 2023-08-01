import React from "react";
import '../App.css'
let date=new Date();
let year=date.getFullYear();

function Footer(){
    return (
        <div>
            <footer>
                <p>Copyright (c) {year}</p>
            </footer>
        </div>
    );
}

export default Footer;