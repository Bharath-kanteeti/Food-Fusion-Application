import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it('should check for rendering header component', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button", {name: "Login"}) // If I had multiple roles and required only one of them the we can specify them, here I'm specifying the name of the button
    //const loginButton = screen.getByText("Login")
    expect(loginButton).toBeInTheDocument()
})

it('should render the header component with cart text', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const cartItems = screen.getByText(/Cart/) // here we are using rejex to match the text
    expect(cartItems).toBeInTheDocument()
})

it('should change for login button to logout', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button", {name: "Login"})
    fireEvent.click(loginButton) // Fire event is used to simulate the click event
    const logoutButton = screen.getByRole("button", {name: "Logout"})

    expect(logoutButton).toBeInTheDocument()
})
