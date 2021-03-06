import fetch from 'isomorphic-fetch';

const baseUrl = 'https://backend-drarek.herokuapp.com';
const striminStatusPlaylist = 'http://strimin-radio.ddns.net:8000/status-json.xsl';
const api = {
  playlist: {
    async getAll() {
      const response = await fetch(`${baseUrl}/playlists`);
      const data = await response.json();
      return data;
    },
    async getSingle(id = 1) {
      const response = await fetch(`${baseUrl}/playlist/${id}`);
      const data = await response.json();
      return data;
    },
    async getIcesPlaylist() {
      const response = await fetch(`${striminStatusPlaylist}`);
      const data = await response.json();
      return data;
    },
  },
  users: {
    async getSingle(id = 1) {
      const response = await fetch(`${baseUrl}/users/${id}`);
      const data = await response.json();
      return data;
    },
    async getPosts(id = 1) {
      const response = await fetch(`${baseUrl}/posts?userId=${id}`);
      const data = await response.json();
      return data;
    }
  }

};

export default api;
