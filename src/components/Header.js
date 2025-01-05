import { LOGO_URL } from "../utils/constants"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext"

const Header = () =>{
    const [btnName, setbtnName] = useState("Login")
    const {loggedinUser} = useContext(UserContext)

    return(
        <div className="flex justify-between bg-pink-50 m-2 p-2 shadow-md sm:bg-green-50 lg:bg-yellow-50">
            <div className="logo-div">
                <img className="logo w-20 " src={LOGO_URL} alt="App-Logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex m-1">
                    <li className="px-2">
                        <Link to="/">
                            Home
                        </Link> </li>
                    <li className="px-2">
                        <Link to="/about">
                            About us
                        </Link> </li>
                    <li className="px-2">
                        <Link to="/contact">
                            Contact us
                        </Link> </li>
                    <li className="px-2">
                        <Link to="/cart">
                            Cart
                        </Link> </li>
                    <li className="px-2">
                        <Link to="/groccery">
                            groccery
                        </Link> </li>
                </ul>
                <div >
                    <ul className="flex">
                        <button className="border border-solid border-black p-2 justify-items-center bg-gray-50" onClick={() => {
                            btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")
                        }}>{btnName}</button>
                        <li className="p-1 m-1">{loggedinUser}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header