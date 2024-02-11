import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'cf0b2e6458344286a3b60ce95e058ac1',
  }
});
