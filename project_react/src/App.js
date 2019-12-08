  
import React from 'react';
import './App.css';
import Profile from "./components/Profile"
import ContactList from "./components/Contacts"
import AddContact from "./components/addcontact";
class App extends React.Component {
constructor(props){
super(props);
 this.state = {
  contacts: [],
  profile: [],

};
}


componentDidMount() {
  window.
  fetch("https://apiexample.website/contacts", {
    "method": "GET",
    "headers": {
      "API": "sullivan"
    }
  })
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data.contacts })
    });
  this.showNewProfile();
}


addContact = event => {
  event.preventDefault();

  const name = document.getElementById("name-input").value;
  const number = document.getElementById("number-input").value;
window.
  fetch("https://apiexample.website/contacts/add", {
    method: "POST",
    headers: {
      "API": "sullivan",
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name: name,
      number: number
    })
  })
    .then(this.showNewContactsList())
    .catch(err => {
      console.log(err);
    });
    
  document.getElementById("name-input").value = "";
  document.getElementById("number-input").value = "";
};

componentDidUpdate(){
  this.showNewContactsList();
  this.showNewProfile();
}

showNewProfile = () => {
  window.
  fetch("https://apiexample.website/profile", {
    "method": "GET",
    "headers": {
      "API": "sullivan"
    }
  })
  .then(res => res.json())
  .then((data) => {
    this.setState({ profile: data })
  })
  .catch(console.log("Person could not be added"))
}


showNewContactsList = () => {
window.
  fetch("https://apiexample.website/contacts", {
    "method": "GET",
    "headers": {
      "API": "sullivan"
    }
  })
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data.contacts })
    })
    .catch(console.log("Could Not get contacts List"))
}







  render() {
    return (
      <div class="contact-app">
        <Profile profile={this.state.profile} />
        
        <ContactList contacts={this.state.contacts} />
        <AddContact 
         createContact={this.addContact}
        />
      </div>
    );
  }
}

export default App;