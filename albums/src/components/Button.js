import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

/*
Go to te docs and look up
TouchableHighlight
TouchableNativeFeedback
TouchableOpacity
TouchableWithoutFeedback

these are all glorified buttons
*/

const Button = () => {
  return(
    <TouchableOpacity>
      <Text>Click me!!</Text>
    </TouchableOpacity>
  );
};

export default Button;