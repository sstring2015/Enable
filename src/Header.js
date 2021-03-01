import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom";


function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img className="header__logo"
            src="https://lh3.googleusercontent.com/proxy/BzTqk249Ls8d05jvyJ_RDdYa3F-gqWzlAETGIN7ITKC6NDXwVEtUwU1uOBHUMoAxwdy_njQlUj56mM0VbbE_N3rrKuhoDaimC7UB1gWEM5zCuitHRtqg1i5NoyBmPw"
            />
            </Link>



        </div>
    )
}

export default Header
