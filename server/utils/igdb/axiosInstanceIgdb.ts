import axios from 'axios';

const axiosInstanceAvito = axios.create({
  baseURL: 'https://api.igdb.com/v4',
  headers: {
    Authorization: `Bearer ${process.env.IGDB_TOKEN}`,
  },
});

export default axiosInstanceAvito;
