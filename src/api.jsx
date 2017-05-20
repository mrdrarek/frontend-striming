import fetch from 'isomorphic-fetch';

const baseUrl = 'https://jsonplaceholder.typicode.com';
const viviendas = 'https://www.urbenia.es/viviendas/getViviendasJSON';
const api = {
  post: {
    async getList(page = 1) {
      const response = await fetch(`${baseUrl}/posts?_page=${page}`);
      const data = await response.json();
      return data;
    },
    async getSingle(id = 1) {
      const response = await fetch(`${baseUrl}/posts/${id}`);
      const data = await response.json();
      return data;
    },
    async getComments(id = 1) {
      const response = await fetch(`${baseUrl}/posts/${id}/comments`);
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
    },
  },
  viviendas: {
    async getAll(page = 1) {
      const response = await fetch(`${viviendas}/${page}`);
      const data = await response.json();
      return data;
    },
    async getSingle(id = 1) {
      const response = await fetch(`http://www.urbenia.es/viviendas/getViviendaJSON/${id}`);
      const data = await response.json();
      return data;
    },
  },
};

export default api;
