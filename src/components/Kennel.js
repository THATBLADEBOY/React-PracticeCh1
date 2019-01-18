import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./Kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Kennel




// import React, { Component } from "react"
// import EmployeeList from "./employee/EmployeeList"
// import LocationList from "./location/LocationList"
// import AnimalList from "./animals/AnimalList"
// import "./Kennel.css"


// class Kennel extends Component {

//     /*
//         Although you will eventually be pulling your objects
//         from your json-server API, for this chapter, we're
//         faking it and just creating those arrays in the component
//         itself
//     */
//     employeesFromAPI = [
//         { id: 1, name: "Jessica Younker" },
//         { id: 2, name: "Jordan Nelson" },
//         { id: 3, name: "Zoe LeBlanc" },
//         { id: 4, name: "Blaise Roberts" }
//     ]

//     // This will eventually get pulled from the API
//     locationsFromAPI = [
//         { id: 1, name: "Nashville North", address: "500 Circle Way" },
//         { id: 2, name: "Nashville South", address: "10101 Binary Court" }
//     ]

//     animalsFromAPI = [
//         { id: 1, name: "Buster", species: "Cat", ownerId: 1 },
//         { id: 2, name: "Kibbles", species: "Dog", ownerId: 3 },
//         { id: 3, name: "Banana", species: "Snake", ownerId: 5 }
//     ]

//     ownersFromAPI = [
//         { ownerId: 1, name: "Ryan Tanay" },
//         { ownerId: 2, name: "Emma Beaton" },
//         { ownerId: 3, name: "Dani Adkins" },
//         { ownerId: 4, name: "Adam Oswalt" },
//         { ownerId: 5, name: "Fletcher Bangs" },
//         { ownerId: 6, name: "Angela Lee" }
//     ]

//     state = {
//         employees: this.employeesFromAPI,
//         locations: this.locationsFromAPI,
//         animals: this.animalsFromAPI,
//         owners: this.ownersFromAPI
//     }

//     render() {
//         return (
//             <article className="kennel">
//                 <LocationList locations={this.state.locations} />
//                 <EmployeeList employees={this.state.employees} />
//                 <AnimalList animals={this.state.animals} owners ={this.state.owners}/>
//             </article>
//         )
//     }
// }

// export default Kennel

// import React, { Component } from 'react'
// import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
// import LocationList from "./location/LocationList"


// export default class Kennel extends Component {
//     render() {
//         return (
//             <div>
//                 {/* <h3>Student Kennels</h3>
//                 <h4>Nashville North Location</h4>
//                 <h5>500 Puppy Way</h5> */}
//                 <EmployeeList />
//                 <LocationList />
//             </div>
//         );
//     }
// }