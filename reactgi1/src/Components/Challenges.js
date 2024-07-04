//VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with your basic information 
//for example name, number, date of birth and etc. 
//This div should be hard-coded to prepare for the Medium Challenge.


import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div>
        <p>Name: Terry Crews</p>
        <p>Number: 555-555-5554</p>
        <p>Date of Birth: March 2, 1977</p>
      </div>
    );
  }
}


//export default App;






//EASY: Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, 
//and set ‘this.state’ to an empty object inside of the ‘App’ class.
// Inside of ‘this.state’ create a ‘person’ property and set it to an empty object

constructor(props){
  super(props);
  this.state = {
    person: {}
  };
};





//MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in 
//the constructor.  Then take the returned ‘div’ and create a component,
 //pass state into it and import it as ‘BasicInfo’. 
 //(This challenge should not change the look of the page)


import React, { Component } from 'react';
import BasicInfo from './BasicInfo';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'Terry Crews',
        number: '555-555-5554',
        dob: 'March 2, 1977'
      }
    };
  }


  render() {
    return (
      <BasicInfo person={this.state.person} />
    );
  }
}


//export default App;






//HARD: Now that you have a basic react app to display one person’s worth of
 //information, now modify the app to iterate over an array of people’s 
 //basic information, while still keeping the new list of contacts in the top-level of state.
//(Optional: add styling to space out each person’s info)


import React, { Component } from 'react';
import BasicInfo from './BasicInfo';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { name: 'Terry Crews', number: '555-555-5554', dob: 'March 2, 1977' },
        { name: 'Selena Gomex', number: '999-992-4119', dob: 'Decemeber 31, 1994' }
      ]
    };
  }


  render() {
    return (
      <div>
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}


export default App;
