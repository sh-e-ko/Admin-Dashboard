import axios from 'axios';

export const UsersApi = axios.create({
    baseURL: 'https://dummyjson.com/users',
});


export default UsersApi;