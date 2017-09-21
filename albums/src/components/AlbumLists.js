import React, {Component} from 'react'
import {View} from 'react-native';
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
    //we need to pass down the prop elem to AlbumDetail
    return this.state.albums.map((elem, idx) => 
      <AlbumDetail key={idx} album={elem}/>
    );
  }
  
  
  render(){
    // this.setState({albums: ['a','b','c']})
    console.log(this.state.albums)
    return(
      <View>
        {this.renderAlbums()}
      </View>
    );
  }  
}

export default AlbumList;