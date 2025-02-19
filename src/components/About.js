import User from "./User"
import UserClasss from "./UserClass"

const About = () => {
    return (
        <div className="p-2 m-2">
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