import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://kashapov-burger-builder.firebaseio.com/'
});

export default instance;