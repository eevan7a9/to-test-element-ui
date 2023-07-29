import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/eevan7a9/social-media-db'
  // You can add other configurations here, such as headers, interceptors, etc.
});

export default instance;
