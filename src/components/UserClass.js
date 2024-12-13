// Class Based component
import React from "react";

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
                <h2>Name:{name}</h2>
                <h4>{location}</h4>
            </div>
        )
    }
}

export default UserClasss