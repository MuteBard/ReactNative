
import React from 'react';
import {View, AppRegistry} from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumLists'

//to return more than one component, you must wrap them in view tags
const App = () => {
  return (
    <View>
      <Header headerText={'Albums are food'}/>
      <AlbumList/>
    </View>
  );
};

AppRegistry.registerComponent('albums', () => App); 