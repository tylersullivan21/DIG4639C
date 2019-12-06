import React, { Component } from 'react';

class Add extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        name: "",
        number: 0
      };
  }

 


  getValue = (event) => {

    event.preventDefault();

    const name = document.querySelector("#name").value;
    const number = document.querySelector("#number").value;

    this.setState({"name": name, "number": number});

  }

  


  render() {
    return (
      <div>
        <form onSubmit={this.getValue}>
          <input type="text" id="name" />
          <input type="text" id="number" />
          <button>SUBMIT</button>
        </form>
        <hr />
        <p>{this.state.name}</p>
        <p>{this.state.number}</p>
      </div>
    );
  }

}





export default Add;
