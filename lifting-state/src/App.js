import React from 'react';
import './App.css';
import Child from './components/parenttochild/child'

function App() {
state ={
title: "placeholder title";

}

  return (
    <div className="App">
  <Child title={this.state.title}/>
    </div>
  );
}

export default App;
