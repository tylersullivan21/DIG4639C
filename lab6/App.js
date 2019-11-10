import React from 'react';

import {  Text, View, StyleSheet } from 'react-native';
import { SocialIcon } from 'react-native-elements'
import { checkForUpdateAsync } from 'expo/build/Updates/Updates';

const uniqueStyles = StyleSheet.create({
  
  textStyles: {
    backgroundColor: "magenta",
    color: "cyan",
    margin: 50
  }

})

const containerStyles = StyleSheet.create({
backGroundStyles:{
  backgroundColor: "cyan",
}

})

 export default class App extends React.Component {
  render() {
    return (
      <View style={containerStyles.backgroundStyles}>
 
        <Text style={uniqueStyles.textStyles}>My favorite movie is Monsters Inc</Text>
       
        <Text style={uniqueStyles.textStyles}>One of the reasons Monsters Inc is my favorite movie is because growing up when I played baseball my nickname was sully due to my name being James T Sullivan. This sounded very similar to James P Sullivan and led to me having a bond with the character and the movie.</Text>
   
<SocialIcon
  title='Sign In With Facebook'
  button
  type='facebook'
/>
<SocialIcon
  title='Sign In With Twitter'
  button
  type='twitter'
/>
<Text style={uniqueStyles.textStyles}>Played around with added more react native elements by adding sign in button for twitter and facebook</Text>
      </View>
    );
  }
}
