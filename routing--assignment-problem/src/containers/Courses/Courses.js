import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Courses.css';

import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    selectedHandler = (course) => {
        console.log(course.id, course.title);
        this.props.history.push({
            pathname: '/courses/'+course.id,
            search: '?title='+course.title,
            state: { course: course }
        });
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <article className="Course" key={course.id} onClick={() => this.selectedHandler(course)}>{course.title}</article>;
                        } )
                    }
                </section>
                <Route  path={this.props.match.url + '/:id'} component={Course}/>
            </div>
        );
    }
}

export default Courses;