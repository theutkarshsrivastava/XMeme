import { FETCH_ALL, UPDATE, LIKE, CREATE, LIMIT} from '../constants/actionTypes.js'

export default (posts = [], action) => {
  
  switch (action.type) {
    case FETCH_ALL:
      return action.payload.slice(0,LIMIT);
    case  UPDATE:
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...posts.reverse(), action.payload].reverse().slice(0,LIMIT);
      //return posts;

    /*case 'UPDATE':
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post))
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);*/
    default:
      return posts.reverse();
  }
};