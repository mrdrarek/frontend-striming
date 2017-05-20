import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Loading from '../../shared/components/Loading';

import api from '../../api';

import styles from './vivienda.css';


class detalleVivienda extends Component {
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
    this.initialFetch();
  }
  async initialFetch() {
    const [
      vivienda,
    ] = await Promise.all([
      api.viviendas.getSingle(this.props.match.params.id),
    ]);

    this.setState({
      loading: false,
      vivienda: vivienda,
      fotos: vivienda.Fichero,
    });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <article id={`vivienda-${this.props.id}`} className={styles.vivienda}>
        <div className={styles.vivienda_inner}>
          <div className={styles.foto}>
          {this.state.fotos[0] ? (
            <img alt="foto" height="190px" src={`http://www.urbenia.es/${this.state.fotos[0].path}`} />
          ):(
            <img alt="foto" height="190px" src={`http://www.urbenia.es/imagecache/212x159_urbenia_no_image_big.png`} />
          )}
          </div>
        <div className={styles.vivienda_info}>
            <h2 className={styles.title}>
              <Link to={`/vivienda/${this.props.id}`}>
                {this.state.vivienda.Vivienda.titulo_vivienda_web ? (
                  this.state.vivienda.Vivienda.titulo_vivienda_web
                ) : (
                  <span>Sin titulo</span>
                )}
              </Link>
            </h2>
            <div className={styles.body}>
              {this.state.vivienda.Vivienda.textopublicidad} ...
              {this.state.vivienda.Vivienda.pvp_venta}
            </div>
            <div className={styles.features}>
              <ul>
                <li>{this.state.vivienda.Vivienda.m2}m<sup>2</sup></li>
                <li>{this.state.vivienda.Vivienda.habitaciones} habitaciones</li>
                <li>{this.state.vivienda.Vivienda.wc} WC</li>
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

detalleVivienda.propTyeps = {
  id:PropTypes.number,
  userId:PropTypes.number,
  title:PropTypes.string,
  body:PropTypes.string,
};


export default detalleVivienda;
