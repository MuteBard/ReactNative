import React from 'react';
import {Text, View, Image } from 'react-native';
import Card from './Card'; 
import CardSection from './CardSection'

//DESTRUCTURING NOTES
//Whenever we start to get more than two references to a prop
//it always good practice to destructre that prop
// so we scale from:
//const AlbumDetail = (props) => {
//to
//const AlbumDetail = ({album}) => {
//then we destructure album within the functional component body 

//IMAGES NOTE EXCLUSIVE TO REACT NATIVE
//In react native, unlike images used in html, images do not expand to fill
//their container by default, you must manually add in a styling rule that
//tells the image tag exactly how big the image should be
const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image} = album;
  return(
    <Card>
      <CardSection>
        <View>
          <Image 
            style={styles.thumbnailStyle } 
            source={{uri:thumbnail_image}}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  ); 
};

const styles = {
  headerContentStyle:{
    flexDirection : 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle:{
    height : 50,
    width : 50
  }
};
export default AlbumDetail;