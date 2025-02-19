const { render, screen } = require("@testing-library/react")
import Restrocards from '../RestroCards'
import MOCK_DATA from '../mocks/resCardMock.json'
import '@testing-library/jest-dom'
import { withVegOrNonVeg } from '../RestroCards'

it('should render restro card', () =>{
    render(
        <Restrocards resData = {MOCK_DATA}/>
    )
    const restroName = screen.getByRole('heading', {name:'Pizza Hut'})
    expect(restroName).toBeInTheDocument()
})

it('should render restro card with promoted card i.e, testing higher order components', () =>{
    const VegRestroCard = withVegOrNonVeg(Restrocards)
    render(
        <VegRestroCard resData = {MOCK_DATA}/>
    )
    const promotedLabel = screen.getByText('Pure Veg')
    expect(promotedLabel).toBeInTheDocument()
})