//you dont want to destructure the React import and eliminate React
//some things are dependant on it for the JSX to work since it needs
//to go from jsx -> react.createElem calls and for those calls to be 
//recognized we will need react

import React, {Component} from 'react'
import {View, Text} from 'react-native';


//functional components vs classbased components
//functional components must return an amount of JSX

//we are stating in extends that we want to borrow a bunch of 
//functionality from this base component class 
//when creating a class component, there must be at least one method
//that is the render method and it must reutrn at least some JSX
class AlbumList extends Component {
  return(
    <View>
      <Text>AlbumList!!</Text>
    </View>
  );
}//classes do nt require semi colons

export default AlbumList;