import axios from 'axios';

export const axiosRequest = axios.create({
   baseURL: 'https://api.itbook.store/1.0/',
});
