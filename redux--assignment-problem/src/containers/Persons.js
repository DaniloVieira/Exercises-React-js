import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../store/actions';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    // state = {
    //     persons: []
    // }

    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'Max',
    //         age: Math.floor( Math.random() * 40 )
    //     }
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.concat(newPerson)}
    //     } );
    // }

    // personDeletedHandler = (personId) => {
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.filter(person => person.id !== personId)}
    //     } );
    // }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAddedHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        persons: state.persons // takes from reducer and set intro props
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onPersonDeletedHandler: (id) => dispatch({type: actionTypes.PERSON.DELETE, id}),
        onPersonAddedHandler: () => dispatch({type: actionTypes.PERSON.ADD})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);