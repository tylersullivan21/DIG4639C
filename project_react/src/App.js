  
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
  addcontact: "",
  removecontact: ""
};

}


  render() {
    return (
      <div>
        <Display />
        <AddContact />
      </div>
    );
  }
}

export default App;