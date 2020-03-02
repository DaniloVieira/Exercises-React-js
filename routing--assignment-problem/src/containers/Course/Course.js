import React, { Component } from 'react';

class Course extends Component {
    render () {
        const id = this.props.match.params.id;
        return (
            <div>
                <h1>{this.props.location.search.replace('?title=', '')}</h1>
                <p>You selected the Course with ID: {id}</p>
            </div>
        );
    }
}

export default Course;