import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from '../mocks/resMockData.json'
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'
import { act } from "react"
//import { act } from "react-dom/test-utils"

// global is a keyword that is used to define global variables. here we are defining fetch as a global variable and it can be replaced everywhere, where we use fetch function
// jest.fn() is a jest function that is used to mock the function
// here we are mocking the fetch function
    // Faking an api call which is not connected to browser
    // We are not making any api call to the server
global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})
// In nrml fetch function we get promise and promise returns json and json returns again a promise
// For the 1st time by resolving a promise we get the json data which is again a promise
// After resolving promise for 2nd time we get the data

it('should render body component with search button', async() => {
    await act(async() => render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>
    ))

    const beforerestroCards = screen.getAllByTestId('restro-cards')
    expect(beforerestroCards.length).toBe(20)
    const searchButton = screen.getByTestId('search-btn')
    const searchText = screen.getByTestId('search-text')
    fireEvent.change(searchText,{target: {value: 'burger'}})
    fireEvent.click(searchButton)
    const afterrestroCards = screen.getAllByTestId('restro-cards')
    expect(afterrestroCards.length).toBe(5)
    //expect(searchButton).toBeInTheDocument()
})

it('should check the top rated restaurant button', async() => {
    await act(async() => render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>
    ))
    const ratedrestro = screen.getByRole('button', {name:'Top rated restaurants'})
    fireEvent.click(ratedrestro)
    const cards = screen.getAllByTestId('restro-cards')
    expect(cards.length).toBe(7)
})