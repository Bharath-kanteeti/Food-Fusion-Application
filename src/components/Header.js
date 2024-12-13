import { LOGO_URL } from "../utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () =>{
    const [btnName, setbtnName] = useState("Login")
    return(
        <div className="header">
            <div className="logo-div">
                <img className="logo" src={LOGO_URL} alt="App-Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About us
                        </Link></li>
                    <li>
                        <Link to="/contact">
                            Contact us
                        </Link></li>                    
                    <li>
                        <Link to="/cart">
                            Cart
                        </Link>
                    </li>
                    <li>
                        <Link to="/groccery">
                            groccery
                        </Link>
                    </li>
                    <button className="login-out" onClick={() => {
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header