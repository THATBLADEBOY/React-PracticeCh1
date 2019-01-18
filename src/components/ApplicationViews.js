import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'


class ApplicationViews extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Doodles", species: "Cat" },
        { id: 2, name: "Jack", species: "Rabbit" },
        { id: 3, name: "Angus", species: "Turtle" },
        { id: 4, name: "Henley", species: "Scorpion" },
        { id: 5, name: "Derkins", species: "Dog" },
        { id: 6, name: "Checkers", species: "Koala" }
    ]

    ownersFromAPI = [
        { id: 1, name: "Hank Hill", phoneNumber: "931-500-9283" },
        { id: 2, name: "Finn the Human", phoneNumber: "123-453-6354" },
        { id: 3, name: "Steven Universe", phoneNumber: "949-828-8437" },
        { id: 4, name: "Bojack Horseman", phoneNumber: "718-382-1342" }
    ]


// If you haven't created the owners array in your state yet, please go ahead and create it now, and populate it with 4 owners. Each owners should have the id, phoneNumber, and name properties.

// Create a link in your navigation bar that links to /owners path.
// Create a route for /owners that renders the <OwnerList> component and sends the corresponding state property.
// Add the code in <OwnerList> to display all the items in the array.

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews