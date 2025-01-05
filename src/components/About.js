import User from "./User"
import UserClasss from "./UserClass"

const About = () => {
    return (
        <div>
            <h1>About</h1>
            {/* <User 
                name = {"Bharath Kanteeti"}
            /> */}
            <UserClasss 
                name = {
                    "Bharath_Kanteeti"
                }
            />
        </div>
    )
}

export default About