`Goal our text should be centered and a border at the bottom. We need some
mechanism, some nice way to do just that.

The text tag right now is just about showing text and not much leverage on 
positioning itself around the screen. Therefore we import the View tag.
they are like our divs

`
import React from 'react';
import {Text, View} from 'react-native';


const Header = () =>{
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStyle:{
    backgroundColor:  'cyan'
  },
  textStyle:{
    fontSize: 70
  }
};

export default Header;