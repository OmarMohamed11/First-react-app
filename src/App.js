import React, { Component } from 'react';
import Classes from './App.css';
import Person from './Person/Person';
// import Radium , {StyleRoot}  from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  ageChangedHandler  = (event , id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id 
    })

    const person = {...this.state.persons[personIndex]}

    person.age = event.target.value;

    const persons =[...this.state.persons]

    persons[personIndex] = person;

    this.setState({persons : persons});

  }
  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
   
    let persons = null;
    let toggle;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return <Person
              click={(event) => this.deletePersonHandler(person.id)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              changedAge={(event) => this.ageChangedHandler(event, person.id)} />
          })}
        </div>
      );
       toggle = Classes.toggle
    }

    let assignedClassed = []
    if(this.state.persons.length <= 2){
      assignedClassed.push(Classes.red)
    }
    if(this.state.persons.length <= 1){
      assignedClassed.push(Classes.bold)
    }

    return (
    // <StyleRoot>
      <div className={Classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClassed.join(" ")}>This is really working!</p>
        <button className={toggle}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
      // </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
