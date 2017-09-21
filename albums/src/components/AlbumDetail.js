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

//By default, when you make a really large component in 
//react native, it is not going to scroll, thankfully
//fixing the scrolling issue is straight forward as it
//requires simply two steps
//identify jsx tags that we need to be scrollable (everything in AlbumList)
//import scrollView from reactnative
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