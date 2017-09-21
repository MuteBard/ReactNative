import React from 'react';
import {Text, View } from 'react-native';
import Card from './Card'; 
import CardSection from './CardSection'

const AlbumDetail = (props) => {
  console.log(props.album.title)
  return(

    //add two new view tags, one that will house the image and 
    //one that will house the text
    <Card>
      <CardSection>
        <View>
        </View>
        <View style={styles.headerContentStyle}>
          <Text>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
    </Card>
  ); 
};

const styles = {
  headerContentStyle:{
    flexDirection : 'column',
    justifyContent: 'space-around'
  }
};
export default AlbumDetail;