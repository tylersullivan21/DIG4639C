import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    name: 'tyler'
  }


changeName = (newName) => {
  this.setState({

      name: newName

  }) 
}

changeNameFromInput = (newName) => {
  this.setState({

      name: newName

  }) 
}


  render(){
  return (
    <div className="App">
<br />
<button onClick={this.changeName.bind(this,'Awesome Tyler')}>Change the state</button>

<input type="text" onChange={this.changeNameFromInput}></input>
  <div>{this.state.name}</div>
    </div>
  );
  }
}

export default App;
