import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm'


class App extends Component{

  //https://console.firebase.google.com/u/0/project/authentication-ac3a5/authentication/providers
  componentWillMount(){
    firebase.initializeApp({
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
        <LoginForm/>
      </View>
    )
  }
}

export default App;
