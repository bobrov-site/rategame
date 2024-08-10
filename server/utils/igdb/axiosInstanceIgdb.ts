import axios from 'axios';

const axiosInstanceIgdb = axios.create({
  baseURL: 'https://api.igdb.com/v4',
});

export default axiosInstanceIgdb;
