import React, {Component} from 'react'
import {View, Text} from 'react-native';
//https://www.youtube.com/watch?v=xmgY37oc_B4
// DO NOT DO import axios from 'axios'
import * as axios from 'axios';
console.ignoredYellowBox = ['Remote debugger'];
class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(resp => resp.data)
        .then(data => this.setState({albums: data}))
  }
  
  renderAlbums(){
    return this.state.albums.map(elem => <Text>{elem.title}</Text>)
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