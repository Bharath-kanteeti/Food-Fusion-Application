import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import Error from "./components/Error"
import RestroMenu from "./components/RestroMenu"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
//import Groccery from "./components/Groccery"

const Groccery = lazy(() => import("./components/Groccery"))

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet/>
        </div>
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