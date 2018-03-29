import { FETCH_USER } from '../actions/type';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; //we use this like var a = b || 1
    default:
      return state;
  }
};
