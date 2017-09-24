import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({label, value, onChangeText, placeholder}) => {
  const {inputStyle, containerStyle, lableStyle} = styles ;
  return(
    <View style={containerStyle}>
      <Text style={lableStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}
//flex 1 get 1/3 of the space, flex 2 gets 2/3 of the space
const styles ={
  inputStyle:{
    color : '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  lableStyle:{
    paddingLeft: 20,
    fontSize: 18,
    flex:1
  },
  containerStyle:{
    height : 40,
    flex: 1,
    flexDirection: 'row',
    alignItems : 'center'
  }
}
export {Input};
