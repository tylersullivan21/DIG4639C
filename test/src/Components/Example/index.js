import React from "react";

class Example extends React.Component {


constructor(props){
super(props);
this.state = {chickens: []};
}

//arrow function
addElement = () => {
    let localChickens = this.state.chickens;
    localChickens.push(<Chicken />);
    this.setState({chickens: localChickens});
;}

removeElement = () => {
let localChickens = this.state.chickens;
localChickens.pop();
this.setState({chickens: localChickens});

}


render() {
return(
    <div>
<button onClick={this.addElement}>Click Me! </button>
<button onClick={this.removeElement}>Remove Chicken</button>
</div>
);
}

}

export default Example;