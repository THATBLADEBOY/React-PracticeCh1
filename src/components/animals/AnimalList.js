import React, { Component } from 'react'


export default class AnimalList  extends Component {

    

    

    render() {

        // let theOwners = this.props.owners
        // let theAnimals = this.props.animals

        //  theAnimals.forEach(animal => {
        //     theOwners.forEach(owner => {
        //         if (owner.ownerId === animal.ownerId) {
        //             console.log(owner, animal)
        //         }
        //     })
        // })

        // let ownersOfAnimals = theOwners.forEach(owner => {
        //     console.log(owner.ownerId);
        // })

        // console.log(theOwners, theAnimals);

        // let ownerOfAnimal = theOwners.forEach(owner => this.props.owners.find(owner => owner.id === this.props.animals.ownerId))

        // console.log(ownerOfAnimal);

        return (
            <article className="animals">
            <h3>Animals</h3>
            {
                this.props.animals.map(animal =>
                    <div key={animal.id}>
                        {animal.name} the {animal.species}
                        
                    </div>
                    )
            }
            </article>
        );
    }
}