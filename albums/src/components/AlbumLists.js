import React, {Component} from 'react'
import {ScrollView} from 'react-native';
import * as axios from 'axios';
import AlbumDetail from './AlbumDetail';

console.ignoredYellowBox = ['Remote debugger'];
class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(resp => resp.data)
        .then(data => this.setState({albums: data}))
  }
  
  renderAlbums(){
    return this.state.albums.map((elem, idx) => 
      <AlbumDetail key={idx} album={elem}/>
    );
  }
  
  //We can scroll but everything seems to bounce back
  //Whenever you have a scrollview, you must add a 
  //style property of flex 1 to your root view element
  //that means goto index.ios.js and the view in there
  //you need to add the style
  render(){
    console.log(this.state.albums)
    return(
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }  
}

export default AlbumList;