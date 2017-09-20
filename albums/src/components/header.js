//rather than creating a seperate CSS file as we do in web apps
//we put all of our style relating to a component within the component file



import React from 'react';
//destructured import
import {Text} from 'react-native';

//Destructuring is used to reference our style


//Instead of using className = "class" in react, you use
//style = {styleName} this is also called a property
const Header = () =>{
  const {textStyle} = styles;
  return (<Text style={textStyle}>Albums!</Text>);
};

//CSS works differently within React Native. atm theres no bootstrap help (rip BS4)
//is there flexbox?
const styles = {
  textStyle:{
    fontSize: 70
  }
};

export default Header;