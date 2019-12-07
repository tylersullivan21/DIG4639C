import React from 'react';
import './App.css';
import Display from "./components/Display";
import Add from "./components/addcontact";
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
        <Add />
      </div>
    );
  }
}

export default App;