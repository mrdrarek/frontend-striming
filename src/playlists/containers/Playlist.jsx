import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import api from '../../api';




class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      loading: true,
      playlist: props.playlist || null,
      currentSong: props.currentSong,
      title: ''
    };

  }
  async componentDidMount() {
    /* const [
      user,
      comments,
    ] = await Promise.all([
      !this.state.user ? api.users.getSingle(this.props.userId) : Promise.resolve(null),
      !this.state.comments ? api.post.getComments(this.props.id) : Promise.resolve(null),

    ]);

    this.setState({
      loading:false,
      user : user || this.state.user,
      comments : comments || this.state.comments
    })*/
    if(this.state.currentSong){
    Object.keys(this.state.currentSong).map((key, index) => {
      if(key == 'title'){
        const title = this.state.currentSong[key];
        this.setState({
          title
        })
      }
    })
  }
  }
  componentDidUpdate(prevProps, previousState){
  if(prevProps.currentSong !== this.props.currentSong) {
    console.log('diferente');
    if(this.state.currentSong){
    Object.keys(this.props.currentSong).map((key, index) => {
      if(key == 'title'){
        console.log(this.props.currentSong[key]);
        const title = this.props.currentSong[key];
        this.setState({
          title
        })
      }
    })
  }
}else{
  console.log('no di');
}
  }
  render() {
    const id = this.props.id;
    return (
      <li  onClick={this.props.onClick}>
        <div className="playlists">#{this.props.name} </div>
        <div className="title">{this.state.title}</div>
      </li>
    );
  }
}

Playlist.propTyeps = {
  id:PropTypes.number
};


export default Playlist;
