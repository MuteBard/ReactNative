
import React from 'react';
import {View, AppRegistry} from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumLists'

//add the style in this root view
// <View style={{flex: 1}}>*stuff*</View> means to 
//please expand this component to fill the entire
//content area of the device
const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header headerText={'Albums are food'}/>
      <AlbumList/>
    </View>
  );
};

AppRegistry.registerComponent('albums', () => App); 