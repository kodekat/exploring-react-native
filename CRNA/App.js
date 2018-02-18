import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style ={styles.textbox}>Welcome to this app!</Text>
        <Text style ={styles.textbox}> This is the homepage :) </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0033cc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox: {
    fontSize: 30,
    color: '#ccff99'
  },
});
