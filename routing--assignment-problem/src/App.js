import React, { Component } from 'react';

import './App.css';

import Courses from './containers/Courses/Courses';
// import Course from './containers/Course/Course';
import Users from './containers/Users/Users';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="Links">
            <header>
              <nav>
                <ul>
                  <li>
                    <NavLink 
                      to="/courses"
                      activeClassName="active">
                        Courses
                      </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/users"
                      activeClassName="active">
                        Users
                      </NavLink>
                  </li>
                </ul>
              </nav>
            </header>
          </div>
          <ol style={{textAlign: 'left'}}>
            <li>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
            <li>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
            <li>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
            <li>Pass the course ID to the "Course" page and output it there</li>
            <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
            <li>Load the "Course" component as a nested component of "Courses"</li>
            <li>Add a 404 error page and render it for any unknown routes</li>
            <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
          </ol>
          {/* <Route path="/" render={() => <h1>Home</h1>}/> */}
          <Route path="/courses" component={Courses}/>
          {/* <Route path="/course/:id" component={Course}/> */}
          <Route path="/users" component={Users}/>
          <Route render={() => <h1>Not Found</h1>}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;