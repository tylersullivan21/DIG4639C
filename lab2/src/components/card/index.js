
import "./index.css";
class Card{
constructor(props){
    this.props = props; 
}

render(){
return `<div class="card"> ${this.props.content}
<h1>This is an h1</h1>
<p>This is content that will fill up the card that goes inside the card which is a very interesting magenta card.</p></div>`

}

}

export default Card;