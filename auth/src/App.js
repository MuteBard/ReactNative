import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';


class App extends Component{

  //lifecycle methods
  componentWillMount(){
    firebase.initalizeApp({
      apiKey: 'AIzaSyCXHVAQdsZSgDdMPhT-q55dA3dQvFvRqlw',
      authDomain: 'authentication-ac3a5.firebaseapp.com',
      databaseURL: 'https://authentication-ac3a5.firebaseio.com',
      projectId: 'authentication-ac3a5',
      storageBucket: 'authentication-ac3a5.appspot.com',
      messagingSenderId: '656601760367'
    });
  }
  render(){
    return(
      <View>
        <Header headerText="Authentication"/>
        <Text>THIS IS AN APP</Text>
      </View>
    )
  }
}

export default App;
