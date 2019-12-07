  
import React from 'react';
import './App.css';
import Display from "./components/Display";
import AddContact from "./components/addcontact";
class App extends React.Component {
constructor(props){
super(props);
 this.state = {
  contacts: "",
  profile: "",
};
}


componentDidMount() {

  window.fetch("https://apiexample.website/contacts",
  {headers: {API: "sullivan"}})
  .then((res) => res.json())
  .then((data) => {
    this.setState({contacts: data.contacts});
    this.getNewContacts();
  });

}



addEvent = event => {
  event.preventDefault();

  const name = document.getElementById("name-input").value;
  const number = document.getElementById("number-input").value;
  // console.log(contactName + " " + contactNumber);
  fetch("https://apiexample.website/contacts/add", {
    method: "POST",
    headers: {
      api: "sullivan",
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name: name,
      number: number
    })
  })
    .then(this.getNewContacts())
    .catch(err => {
      console.log(err);
    });
    
  document.getElementById("name-input").value = "";
  document.getElementById("number-input").value = "";
};


pushContact = () =>{

}


getNewContacts = () => {
  fetch("https://apiexample.website/contacts", {
    headers: { API: "sullivan" }
  })
    .then(res => res.json())
    .then(data => {
      this.setState({ contactlist: data.contacts });
    });
};





  render() {
    return (
      <div>
        <Display />
        <AddContact 
         createContact={this.addEvent}
        />
      </div>
    );
  }
}

export default App;