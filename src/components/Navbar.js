import React from "react"
import logo from "../images/airbnb-logo.png"
import "../style.css"

function Navbar() {
    return (
        <nav>
            <img src={logo} alt="" className="logo"/>
        </nav>
    )
}

export default Navbar