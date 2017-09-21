import React from 'react';
import {Text} from 'react-native';
import Card from './Card'; 
import CardSection from './CardSection'

const AlbumDetail = (props) => {
  console.log(props.album.title)
  return(
    //card needs to be instructed on how to render any children that gets passed directly
    //<Text>{props.album.title}</Text> becomes the props.childern
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  ); 
};
export default AlbumDetail;