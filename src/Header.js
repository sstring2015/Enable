import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom";
import enable from "./enable.png";

function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img className="header__logo"
            src={enable}
          />
            </Link>



        </div>
    )
}

export default Header
