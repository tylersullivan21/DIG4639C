import React from "react";

class Chicken extends  React.Component{

constructor(){
super(props);
this.state = {lifescycle: 0, counter: 0};
this.updateLifeCycle();
}

updateLifeCycle (){

    setInterval(() => {
let localCounter = this.state.counter;
localCounter++;
this.setState({counter: localCounter});
    }

    if(localCounter ==2){
        this.setState({})
    }
    , 1000)
}

render(){

return()

}


}

export default Chicken;