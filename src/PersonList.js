import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component {
  // Define state default values
  state = {
    persons: [],
  };

  // Component Lifecycle Callback
  componentDidMount() {
    fetch(`https://randomuser.me/api/?results=2`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const persons = data.results;
        this.setState({ persons });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  

  render() {
    return (
      <div>
        <ul className="person-list">
  {this.state.persons.map((person) => (
    <li key={person.login.uuid} className="person-item">
        
        <p>{person.name.first} {person.name.last}<strong>-</strong> {person.login.uuid}<br /></p>

      <img className="person-image" src={person.picture.medium} alt={`${person.name.first} ${person.name.last}`} />

      <div className="person-details">
              <strong>Username:</strong> {person.login.username}<br />
              <strong>Gender:</strong> {person.gender}<br />
              <strong>Email:</strong> {person.email}<br />
              <strong>Address:</strong> {` ${person.location.city}, ${person.location.state}, ${person.location.country}, ${person.location.postcode}`}<br />
              <strong>Time Zone:</strong> {person.location.timezone.offset}<br />
              <strong>Birthday:</strong> {new Date(person.dob.date).toLocaleDateString()}<br />
              <strong>Age:</strong> {person.dob.age}<br />
              <strong>Registered:</strong> {new Date(person.registered.date).toLocaleDateString()}<br />
              <strong>Phone:</strong> {person.phone}<br />
              <strong>Cell:</strong> {person.cell}<br />
         </div>   
    </li>
  ))}
</ul>
      </div>
    );
  }
}

export default PersonList;
