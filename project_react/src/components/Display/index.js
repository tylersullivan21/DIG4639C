import React from 'react';

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
      <div>
       {
         this.state.contacts.map((value, index) => {
           return <p key={index}>{value.name}</p>;
        
           
         })
       }
          {
         this.state.contacts.map((value, index) => {
           return <p key={index}>{value.number}</p>;
        
           
         })
       }
      </div>
    );
  }
}

export default Display;
