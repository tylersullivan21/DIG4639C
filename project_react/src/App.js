import React from 'react';
import './App.css';
import Display from "./components/Display";
import Addcontact from "./components/addcontact";
class App extends React.Component {
constructor(props){
super(props);
 this.state = {
  contactS: "",
  profile: "",
  addcontact: "",
  removecontact: ""
};

}


  render() {
    return (
      <div>
        <Display />
        <Addcontact />
      </div>
    );
  }
}

export default App;
