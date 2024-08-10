import axios from 'axios';

const axiosInstanceIgdb = axios.create({
  baseURL: 'https://api.igdb.com/v4',
  headers: {
    Authorization: `Bearer ${process.env.IGDB_TOKEN}`,
  },
});

export default axiosInstanceIgdb;
