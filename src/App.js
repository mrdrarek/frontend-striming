import React, { Component } from 'react';


import api from './api';
import Loading from './shared/components/Loading';
import Playlist from './playlists/containers/Playlist.jsx';
import logo from './logo.png';
import styles from './App.css';

import ReactAudioPlayer from 'react-audio-player';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
      playlistStatus: [],
      loading: true,
      toggleMenu: false,
      audioDomain: 'http://strimin-radio.ddns.net:8000/',
      audioSrc: '',
      imgBackground : 'http://www.gifff.in/img/background.gif?1.210952233901452',
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.toggleSideBar = this.toggleSideBar.bind(this);
    this.randomImage = this.randomImage.bind(this);
    this.reloadJsonStatus = this.reloadJsonStatus.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
    this.changeloading = this.changeloading.bind(this);
    this.randomImage =this.randomImage.bind(this);
    this.setInitialSong =this.setInitialSong.bind(this);

  }
  async componentDidMount() {
    this.initialFetch();
    //window.addEventListener('scroll', this.handleScroll);
    var intervalId = setInterval(this.randomImage, 5000);
    setInterval(this.reloadJsonStatus, 15000);

    clearInterval(this.timer)
   this.timer = setInterval(this.changeloading, 5000)
   this.timer = setInterval(this.setInitialSong, 3000)


  }
  componentWillUmount() {
    //window.removeEventListener('scroll', this.handleScroll);
  }
  setInitialSong(){
    this.setState({
      audioSrc: 'j.ogg',
    })
  }
  changeloading(){
    console.log("changeloading");
    this.setState({
      loading: false,
    });

    clearInterval(this.timer);
  }
  randomImage(){
    let r = Math.floor((Math.random() * 1000000000000000));
    this.setState({
      imgBackground: `http://www.gifff.in/img/background.gif?1.${r}`,
    })
  }
  async reloadJsonStatus(){
    const playlistStatus = await api.playlist.getIcesPlaylist();
    this.setState({
      // posts,
      loading: false,
      playlistStatus,
    });
  }
  async initialFetch() {
    // const posts = await api.post.getList(this.state.page);
    const playlists = await api.playlist.getAll();
    const playlistStatus = await api.playlist.getIcesPlaylist();
    this.setState({
      // posts,

      playlists,
      playlistStatus,
    });
  }
  handleScroll() {
    if (this.state.loading) return null;
    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.documentElement.clientHeight;
    if (!(scrolled + viewportHeight + 300 >= fullHeight)) {
      return null;
    }
    return this.setState({
      loading: true,
    },
    async () => {
      try {
        // const posts = await api.post.getList(this.state.page);
        const viviendas = await api.viviendas.getAll(this.state.page);
        this.setState({
          viviendas: this.state.viviendas.concat(viviendas),
          page: this.state.page + 1,
          loading: false,
        });
      } catch (err) {
          // console.log(err);
        this.setState({ loading: false });
      }
    },
    );
  }
  toggleSideBar(){
    if(this.state.toggleMenu) this.setState({ toggleMenu: false });
    if(!this.state.toggleMenu) this.setState({ toggleMenu: true });

  }
  changeSong(playlist){
    let player =document.getElementsByClassName("react-audio-player");
    this.setState({
      audioSrc: playlist.mount_name,
    })
    player[0].pause();
    player[0].play();
  }
  pauseSong(){
    let player =document.getElementsByClassName("react-audio-player");
    this.setState({
      audioSrc: '',
    })
    player[0].pause();

  }
  play(){
    console.log("asd");
  }
  play2(){
    console.log("play2");
  }
  /*
  <video className="video-container" id='video' autoPlay muted loop >
    <source id="video_source" src="http://strimin.info/images/gif/fdd7ed150edfa904429e3b97998ac9ff.mp4" type="video/mp4"/>
  </video>
  */
  render() {
    return (

      <section name="Home" >
      {this.state.loading && (
        <Loading />
      )}
      <div className="video-container">

          <img src={this.state.imgBackground}/>

      </div>
      <div id="wrapper" className={this.state.toggleMenu ? "toggled" :""}>
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <img src={logo} onClick={this.pauseSong} />
            </li>
            {this.state.playlists
            .map(playlist => <Playlist currentSong={this.state.playlistStatus.server.streams[`/${playlist.mount_name}`]} onClick={this.changeSong.bind(this,playlist)} id={playlist._id} key={playlist._id} {...playlist} />)
            }
          </ul>
        </div>

      <div id="page-content-wrapper">
        <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <audio id="audio" src=''></audio>
                <a href="#menu-toggle" className="btn btn-default hvr-push" id="menu-toggle" onClick={this.toggleSideBar}>
                  <i className="fa fa-toggle-off toggle_icon" aria-hidden="true"></i>
                </a>
              </div>
            </div>
        </div>
        </div>






      </div>

      <ReactAudioPlayer
        src={`${this.state.audioDomain}${this.state.audioSrc}`}
        ref={(element) => { this.rap = element; }}
        autoPlay
        onCanPlay={this.play}
        onPlay={this.play2}
      />
      </section>
    );
  }
}

export default App;
