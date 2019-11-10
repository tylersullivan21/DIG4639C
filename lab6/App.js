import React from 'react';

import {  Text, View, StyleSheet } from 'react-native';
import { SocialIcon } from 'react-native-elements'
import { Icon } from 'react-native-elements'

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
/*Student correctly converted the function into a component*/
/*Using <Text> components, the student described their favorite book, video games, or TV show and summarized why*/
/*Student styled the <Text> components*/ 
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
<Icon
  name='rowing' />

<Icon
  name='g-translate'
  color='#00aced' />
<Icon
  reverse
  name='ios-american-football'
  type='ionicon'
  color='#517fa4'
/>
<Text style={uniqueStyles.textStyles}>Played around with added more react native elements by adding sign in button for twitter and facebook</Text>
      </View>
    );
  }
}
