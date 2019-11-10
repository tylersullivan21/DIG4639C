import React from 'react';
import {  Text, View, StyleSheet } from 'react-native';

const uniqueStyles = StyleSheet.create({
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
       
        <Text style={uniqueStyles.text1}>My favorite movie is Monsters Inc</Text>
       
        <Text style={uniqueStyles.text1}>One of the reasons Monsters Inc is my favorite movie is because growing up when I played baseball my nickname was sully due to my name being James T Sullivan. This sounded very similar to James P Sullivan and led to me having a bond with the character and the movie.</Text>
   
      </View>
    );
  }
}

export default App;
