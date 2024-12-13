import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    console.log(err)
    return (
        <div className="error">
            <h1>Oops!!!</h1>
            <h3>status:{err.status}</h3>
        </div>
    )
}

export default Error