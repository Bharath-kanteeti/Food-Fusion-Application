import { LOGO_URL } from "../utils/constants"

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-div">
                <img className="logo" src={LOGO_URL} alt="App-Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header