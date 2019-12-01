import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {added: {}};

  }

  componentDidMount() {

    fetch("https://apiexample.website/contacts/add", {
      "method": "POST",
      "headers": {
        "api": "sullivan",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      "body": JSON.stringify({
        "name": "tyler",
        "number": "8989"
      })
    })
    .then(response => response.json() )
    .then((data) => this.setState({added: data.added}) )
    .catch(err => {
      console.log(err);
    });

  }

  render() {
    return (
      <div>
        <h2>Added</h2>
        <p>{this.state.added.name}</p>
        <p>{this.state.added.number}</p>
      </div>
    );
  }
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
