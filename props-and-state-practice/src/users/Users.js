import React, { Component } from 'react';
import User from './User';

class Users extends Component {

    state = {
        users: [
            {name: "John", age:20},
            {name: "Billy", age:30},
            {name: "Amanda", age:40},

        ],
        
        title: "Users List"

    };

    makeMeYounger = () => {
        console.log("clicked");
        this.setState({
            users: [
                {name: "John", age:10},
                {name: "Billy", age:20},
                {name: "Amanda", age:30},
    
            ],
        })
        console.log(this.state.users);
    }

 
    render(){
        return (<div>
            <button onClick={this.makeMeYounger}>Make us 10 years younger</button>
            <br/>
    <h1>{this.state.title}</h1>
            <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
            <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
            <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
        </div>)
      }

}

 



export default Users;