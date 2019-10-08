import React from "react";

class Example extends React.Component{

constructor(props){
    super(props);

    this.state = {date: new Date(), countdown:5};
    this.setTime();
}

setTime() {
    setInterval(
        () => {this.setState({date: new Date()})}
        , 1000);

}



render(){
    return (
    <div>
<h1>{this.state.date.toLocaleTimeString()}</h1>
<p>
<h2>{this.state.countdown} seconds left!</h2>
</p>
</div>
    );
}


}

export default Example;