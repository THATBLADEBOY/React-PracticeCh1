import React, { Component } from 'react'


export default class LocationList  extends Component {
    render() {
        return (
            <article className="locations">
            <h3>Locations</h3>
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                        {location.name}
                    </div>
                    )
            }
            </article>
        );
    }
}

// import React, { Component } from 'react'


// class EmployeeList extends Component {
//     render() {
//         return (
//             <section className="employees">
//             {
//                 this.props.employees.map(employee =>
//                     <div key={employee.id}>
//                         {employee.name}
//                     </div>
//                 )
//             }
//             </section>
//         )
//     }
// }

// export default EmployeeList