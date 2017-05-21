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
  }

  render() {
    const id = this.props.id;
    return (
      <li  onClick={this.props.onClick}>
        #{this.props.name}
      </li>
    );
  }
}

Playlist.propTyeps = {
  id:PropTypes.number
};


export default Playlist;
