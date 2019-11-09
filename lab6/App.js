import React from 'react';
import { Text } from 'react-native';

class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Text>My favorite video game is MLB The Show 19</Text>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
