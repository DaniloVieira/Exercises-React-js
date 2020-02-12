import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserIOutput/UserOutput'

class App extends Component {
  state = {
    user: {
      userName:'user one'
    }
  }

  changeUserEventHandler = (event) => {
    this.setState({
      user: {userName: event.target.value}
    })
  }

  render() {

    const styleInput = {
      'background-color': 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',      
    }
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <hr/>
        <hr/>
        <UserOutput userName={this.state.user.userName} userAge='50'></UserOutput>
        <UserOutput userName='user2' userAge='60'></UserOutput>
        <UserInput userName={this.state.user.userName} change={this.changeUserEventHandler} style={styleInput}></UserInput>

      </div>
    );
  }
}

export default App;
