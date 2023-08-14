import React from "react"
import react_logo from "../Images/react-1-logo-png-transparent.png"
export default function Navbar(){
    return (
          <nav className="nav">
            <img src={react_logo} className="nav-img"/>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
          </nav>
    )
}