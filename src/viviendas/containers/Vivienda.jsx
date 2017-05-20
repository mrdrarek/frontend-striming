import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import api from '../../api';

import styles from './vivienda.css';


class Vivienda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      vivienda: props.vivienda || null,
      fotos: props.fotos || null,
      domain: "http://www.urbenia.es/",
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

    return (
      <article id={`vivienda-${this.props.id}`} className='vivienda'>
        <div className='vivienda_inner'>
          <div className='foto'>
            {this.state.fotos[0] ? (
              <img alt="foto" height="190px" src={`http://www.urbenia.es/${this.state.fotos[0].path}`} />
            ):(
              <img alt="foto" height="190px" src={`http://www.urbenia.es/imagecache/212x159_urbenia_no_image_big.png`} />
            )}
          </div>
        <div className='vivienda_info'>
            <h2 className='title'>
sadsad
            </h2>
            <div className='body'>
              {this.props.textopublicidad.substring(0,140)} ...
              {this.props.pvp_venta}
            </div>
            <div className='features'>
              <ul>
                <li>{this.props.m2}m<sup>2</sup></li>
                <li>{this.props.habitaciones} habitaciones</li>
                <li>{this.props.wc} WC</li>
              </ul>
            </div>
            {!this.state.loading && (
              <div></div>
            )}
          </div>
        </div>
      </article>
    );
  }
}

Vivienda.propTyeps = {
  id:PropTypes.number,
  userId:PropTypes.number,
  title:PropTypes.string,
  body:PropTypes.string,
};


export default Vivienda;
