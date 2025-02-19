import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom'

describe('Contact component test cases', () => {
    // BeforeAll, beforeEach, AfterAll, AfterEach are functions which are used to run some code before and after the test cases
    /* beforeAll(() => {
        console.log('Before all test cases')
    })
    beforeEach(() => {
        console.log('Before each test cases')
    })
    afterAll(() => {
        console.log('after all test cases')
    })
    afterEach(() => {
        console.log('after each test cases')
    }) */

    it('Checking if the contact component is rendered or not', () => {
        
        render(<Contact />) // Rendering component on jsdom which is a browser-like environment provided by JSDOM
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
    })
    
    it("to load test button", () => {
        render(<Contact />)
        const buttonText = screen.getByText('Submit')
        expect(buttonText).toBeInTheDocument()
    })
    describe('Input fields testing in contact component', () => {
        it("to load input fields", () => {
            render (<Contact />)
            const placetext = screen.getByPlaceholderText("Name")
            expect(placetext).toBeInTheDocument()
        })
        
        it('to check for 2 input fields', () => {
            render(<Contact />) // Rendering
            const inputFields = screen.getAllByRole('textbox') // Quering
            // inputFields returns an array of all the input fields which are in the form of array contains jsx elements or jsx objects
            //console.log(inputFields.length )
            expect(inputFields.length).toBe(2) // Assertion
        })    
    })
})