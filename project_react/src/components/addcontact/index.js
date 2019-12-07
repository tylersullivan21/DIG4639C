import React, { Component } from 'react';


class Add extends Component {

  constructor(props) {
    super(props);

    this.state = {added: {}};

  }

 componentDidMount() {

    fetch("https://apiexample.website/contacts/add", {
      "method": "POST",
      "headers": {
        "api": "sullivan",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      "body": JSON.stringify({
        "name": this.state.name,
        "number": this.state.number
      })
    })
    .then(response => response.json() )
    .then((data) => this.setState({added: data.added}) )
    .catch(err => {
      console.log(err);
    });
    
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