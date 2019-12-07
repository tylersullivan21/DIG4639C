import React from 'react';
import './display.css'
class Display extends React.Component {

  constructor(props) {
    super(props);

    this.state = {contacts: []};

    

  }

  componentDidMount() {

    window.fetch("https://apiexample.website/contacts",
    {headers: {API: "sullivan"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({contacts: data.contacts});
    });

  }

  render() {
    return (
      <div className="card-container">
       {
         this.state.contacts.map((value, index) => {
           return <p key={index}>{value.name}</p>;
        
           
         })
       }
         
      </div>
    );
  }
}

export default Display;