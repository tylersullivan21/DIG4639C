import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CardList from "./components/CardList"

const nativeStyles = StyleSheet.create({
  text1: {
    backgroundColor: "magenta",
    color: "cyan",
    margin: 50
  }
})

 class App extends React.Component {
  render() {
    return (
      <View>
        <Text>My favorite game is MLB the Show 2019</Text>
        <Text>The Main Reason that I am a fan of the game is that because I am a baseball fan at heart.</Text>
        <Text style={nativeStyles.text1}>
          Look! It's an example!
        </Text>
        <CardList />
      </View>
    );
  }
}

export default App;
