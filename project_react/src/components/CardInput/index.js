import React from "react";

class CardInput extends React.Component {

    render() {
        return(
            <form onSubmit={this.props.adddog}>
                <label>Title: </label>
                <input type="text" name="dogTitle" id="newDogTitle" />
                <br />
                <label>Content: </label>
                <input type="text" name="dogContent" id="newDogContent" />
                <br />
                <button type="submit">+Add dog</button>
                <button type="reset">Reset</button>
            </form>
        );
    }

}

export default CardInput;
