` 
We dont like how 'Albums' is hard coded, it crap if you are tranistioning
from page to page and it doesnt change with the corresponding material
on the page. we want more reusability. so we will refactor this component 
so that index page/app component can decide

Whenever we are exchanging data from a root component to a chid component,
we use the props system. app component is a root, header is a child of it.
`
import React from 'react';
import {Text, View} from 'react-native';


const Header = (props) =>{
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle:{
    backgroundColor:  '#f8f8f8',
    justifyContent: 'center',
    alignItems : 'center',
    height : 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle:{
    fontSize: 20
  }
};

export default Header;