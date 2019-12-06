import React, { Component } from 'react';

class Add extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        name: "",
        number: ""
      };
  }

 


 componentDidMount(){

const addName = document.getElementById("name").value
const addNumber = document.getElementById("number").value

    fetch("https://apiexample.website/contacts/add", {
      method: "POST",
      headers: {
        api: "sullivan",
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: addName,
        number: addNumber
      })
    })
    .then(this.updateContactList())
    .catch(err => {
      console.log(err);
    });
  }


  updateContactList = () => {
    fetch("https://apiexample.website/contacts", {
      headers: { API: "zheng" }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ contactlist: data.contacts });
      });
  };



  render() {
    return (
      <div>
        <form onSubmit>
          <input type="text" id="name" />
          <input type="text" id="number" />
          <button 
>SUBMIT</button>
        </form>
        <hr />
        <p>{this.state.name}</p>
        <p>{this.state.number}</p>
      </div>
    );
  }

}





export default Add;
