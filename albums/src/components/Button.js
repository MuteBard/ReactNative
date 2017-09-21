import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

/*
Go to te docs and look up
TouchableHighlight
TouchableNativeFeedback
TouchableOpacity
TouchableWithoutFeedback

these are all glorified buttons
this provides the user feedback
*/

const Button = ({whenPressed}) => {
  const {buttonStyle, textStyle} = styles;
  return(
    <TouchableOpacity onPress={whenPressed} style={buttonStyle}>
      <Text style={textStyle}>Click me!!</Text>
    </TouchableOpacity>
  );
};
/*remember flex : 1 means that I want this things to fill up as much content
it can
alignSelf: stretch means stretch to fill the limits of the container
*/
const styles = {
  buttonStyle:{
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle:{
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop:10,
    paddingBottom:10
  }
}

export default Button;