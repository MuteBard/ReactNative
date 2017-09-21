import React from 'react';
import {Text, View, Image, Linking } from 'react-native';
import Card from './Card'; 
import CardSection from './CardSection'
import Button from './Button'

//Set up some margin on the "div" that is surrounding the 
//image 
const AlbumDetail = ({album}) => {
  const {
    title,
    artist,
    thumbnail_image,
    image,
    url
  } = album;
  const {
    thumbnailContainerStyle,
    thumbnailStyle,
    headerContentStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  //there is no concept of onPress in our custom button
  //we pass down a function from the parent to the child
  //and the child will execute the function
  return(
    <Card>
    
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image 
            style={thumbnailStyle} 
            source={{uri:thumbnail_image}}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      
      <CardSection>
        <Image 
          style={imageStyle} 
          source={{uri: image}}
        />
      </CardSection>
      
      <CardSection>
        <Button whenPressed={() => Linking.openURL(url)}/>
      </CardSection>
      
    </Card>
  ); 
};

const styles = {
  headerContentStyle:{
    flexDirection : 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle:{
    fontSize:18
  },
  thumbnailStyle:{
    height : 50,
    width : 50
  },
  thumbnailContainerStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle:{
    height: 300,
    flex: 1,
    width : null
  }
};
export default AlbumDetail;