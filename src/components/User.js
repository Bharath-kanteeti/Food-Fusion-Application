import { useState } from "react"

const User = (props) => {
    const {name} = props
    const [count, setCount] = useState(0)

    return (
        <div className="user-card">
            <h2>Name:{name}</h2>
            <h4>College:NIT Rourkela</h4>
            <h5>Count : {count}</h5>
            <button onClick={() => {
                setCount(count + 1)
            }} >Click</button>
        </div>
    )
}

export default User