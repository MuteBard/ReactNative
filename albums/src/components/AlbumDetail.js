import React from 'react';
import {Text, View, Image } from 'react-native';
import Card from './Card'; 
import CardSection from './CardSection'

//Set up some margin on the "div" that is surrounding the 
//image 
const AlbumDetail = ({album}) => {
  const {
    title,
    artist,
    thumbnail_image,
    image
  } = album;
  const {
    thumbnailContainerStyle,
    thumbnailStyle,
    headerContentStyle,
    headerTextStyle,
    imageStyle
  } = styles;
  
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
    </Card>
  ); 
};
//In the imageStyles object, we want to make sure that
//we can span the image from across the screen and this
//can be a bit tricky. code for it is below

//After that is done, we face an issue where we cant scroll
//down :c
//the remedy for this is in the next git commit
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