import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import Error from "./components/Error"
import RestroMenu from "./components/RestroMenu"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import UserContext from "./utils/UserContext"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"

//import Groccery from "./components/Groccery"

// Chunking
// Lazy loading
// Dynamic Building
// Code Splitting
// On Demand Loading
// Dynamic Import of a component
const Groccery = lazy(() => import("./components/Groccery"))

const AppLayout = () => {
    
    const [userName, setUserName] = useState()
    
    useEffect(() => {
        const data = {
            name:""
        }
        setUserName(data.name)
    },[])

    return (
        // Provider is a component that makes the Redux store available to any nested components that have been wrapped in the connect() function.
        // Provider gives redux available to all the components in the application as of now which is much similar to the userContext
        <Provider store={appStore}>
            <div>
                <UserContext.Provider value={{loggedinUser: userName, setUserName}}>
                    <UserContext.Provider value={{loggedinUser: "Bharath"}}>
                        <Header/>
                    </UserContext.Provider>
                    <Outlet/>
                </UserContext.Provider>
            </div>
        </Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },       
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/restaurants/:resId",
                element: <RestroMenu/>
            },
            {
                path: "/groccery",
                element: <Suspense fallback = {<h1>Groccery page is Loadinng based on onDemand......</h1>}><Groccery/></Suspense>
            }
        ],
        errorElement: <Error />
    }
])

root.render(<RouterProvider router={appRouter}/>)