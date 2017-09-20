//Index.ios.js - place code  in here for IOS

import React from 'react';
import {Text, AppRegistry} from 'react-native';
import Header from './src/components/header'

const App = () => {
  return (
    <Header headerText={'Albums are food'}/>
  );
};

AppRegistry.registerComponent('albums', () => App); 