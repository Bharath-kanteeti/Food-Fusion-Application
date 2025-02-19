# React Repo
// in package.json we added "start" and "build" in scripts - basically those are used for working on project
        "start" : "parcel index.html" -- it is used for the project to run in development mode
        "build" : "parcel build index.html" -- it is used for the project too build the project
                here index.html is entry mode of project
    "npx parcel index.html" is simillar to "npm run start" or "npm start"
    "npx parcel index.html" is simillar to "npm run build" but not "npm build" as "start" is a key word reserved by npm

// Destrcturing the props...??
// use of optional chaining("?") in destrcturing..?

# need to check every time the Flow graph for the data Comming from Live Data

// If we use link tag in router linking child components gets refreshes
// If we use anchor tag in router whole page gets reloaded



# Testing the Application
// Jest is a testing framework for JavaScript
 - 3 types of testing
  - Unit testing
  - Integration testing
  - End-2-End testing (e2e)
   - Unit testing: Testing a piece of component or a component isolatedly by rendering it on jsdom which acts like browser
   - Integration testing: Testing how components interact with each other
   - End-2-End testing: Testing the whole application from start to end
        - when we use fetch function in our code we should mock the fetch function and mock data too. Bcoz fetch is power given to us by the browser but we are rendering our component on jsdom which is actully not a browser so jsdom does not supports fetch function. This is the reason we should mock the fetch function
        - when we use redux we shouuld provide the testing environment with our appStore for testing
# Setting testing environment in our application
 - Install react testing library
 - Installed Jest
 - Installed Babel dependencies
 - Configured Babel
 - Configure Parcel Config file to disable babel transpilation
 - JEST --> npx jest --init
 - Install JsDOM library
 - Install @babel/preset-react --> to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - npm i -D @testing-library/jest-dom