// Class Based component
import React from "react";
import UserContext from "../utils/UserContext";

class UserClasss extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            userInfo : {
                name : "Bharath",
                location : "Default"
            }
        }
    }
    
     async componentDidMount(){
        const data = await fetch( "https://api.github.com/users/Bharath-Kanteeti" )

        const json = await data.json()
        
        this.setState({
            userInfo : json
        })

    }
    render(){
        const  {name, location} = this.state.userInfo
        return (
            <div className="user-card">
                <div>
                    {/* using of useContext hook in Class based components where hooks are not present so we use them as components
                        ".Consumer" is the power given by the react to us */}
                    <UserContext.Consumer>
                        {({loggedinUser}) => <h1>{loggedinUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>Name:{name}</h2>
                <h4>{location}</h4>
            </div>
        )
    }
}

export default UserClasss