import axios from 'axios';

const URL = 'https://utkarsh-srivastava-xmemes.herokuapp.com/memes';

export const fetchPosts = () => axios.get(URL);
export const createPost = (newPost) => axios.post(URL, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${URL}/${id}`, updatedPost);
export const likePost = (id) => axios.patch(`${URL}/${id}/likePost`);