import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Swiper from 'react-native-swiper';

export default class App extends React.Component {
  _onPress() {
    Alert.alert('Yay! This is a pop-up alert.');
  }
  render() {
    return (
      
     <Swiper style={styles.wrapper} showsButtons={true}>
     <View style={styles.slide1}>
       <View style={styles.container}>
        <Text style={styles.textbox}>Hello</Text>
        <Text style ={styles.textbox}>Welcome to this app!</Text>
        <Text style ={styles.textbox}> This is the homepage :) </Text>
          <View style={styles.buttonContainer}>
          <Button onPress={this._onPress} 
          title="Click Here" color="#ffffff" accessibilityLabel="Tap on Me"/>
          </View>
     </View> 
     </View>
     <View style={styles.slide2}>
       <Text style={styles.text}>Beautiful</Text>
     </View>
     <View style={styles.slide3}>
       <Text style={styles.text}>Simple</Text>
     </View>
   </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox: {
    fontSize: 30,
    color: '#ccff99'
  },
  buttonContainer:{
    borderRadius: 30,
    padding: 10,
    shadowColor: '#000000',
    backgroundColor: '#2E9298',
    shadowOpacity: 0.25
  }
});
