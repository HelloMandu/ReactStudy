import axios from 'axios';

export const getPost = id => axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers = () => axios.get(`http://jsonplaceholder.typicode.com/users`);