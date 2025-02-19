const { render, screen, fireEvent } = require("@testing-library/react")
const { act } = require("react")
import { Provider } from 'react-redux'
import RestroMenu from '../RestroMenu'
import MOCK_DATA from '../mocks/resMenuData.json'
import '@testing-library/jest-dom'
import appStore from '../../utils/appStore'
import Header from '../Header'
import Cart from '../Cart'
import { BrowserRouter } from 'react-router-dom'
// Mocking Fetch function
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json:() => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it('should render restroMenu component',async () => {
    await act(async () => render(
    <Provider store={appStore}>
        <BrowserRouter>
            <Header />
            <RestroMenu />
            <Cart />
        </BrowserRouter>
    </Provider>
    ))
    const accordianHeader = screen.getByText("Ice Cream Rocks (4)")
    fireEvent.click(accordianHeader)
    expect(screen.getAllByTestId("itemList").length).toBe(4)
    const addBtn = screen.getAllByRole("button", {name: "ADD"})
    expect(screen.getByText("Cart (0)")).toBeInTheDocument()
    fireEvent.click(addBtn[0])
    expect(screen.getByText("Cart (1)")).toBeInTheDocument()
    fireEvent.click(addBtn[2])
    expect(screen.getByText("Cart (2)")).toBeInTheDocument()
    expect(accordianHeader).toBeInTheDocument()
    expect(screen.getAllByTestId("itemList").length).toBe(6)
    
    fireEvent.click(screen.getByRole("button", {name: "Clear"}))
    expect(screen.getAllByTestId("itemList").length).toBe(4)
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument()
})