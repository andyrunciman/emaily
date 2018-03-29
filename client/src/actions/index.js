import axios from 'axios';
import { FETCH_USER } from './type';

// export const fetchUser = () => {
//   return dispatch => {
//     axios
//       .get('/api/current_user')
//       .then(user => {
//         //dispatch(login(user.userid));
//         dispatch({ type: 'TEST', user });
//       })
//       .catch(error => {
//         dispatch(authFailed(error));
//       });
//   };
// };

export const fetchUser = () => async dispatch => {
  const { data } = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: data });
};

// export const handleToken = (token) => {
//   return (dispatch) => {
//     axios.get('/api/makepayment/').then((confirm)=>{
//       console.log(confirm)
//     })
//   }
// }

export const handleToken = token => async dispatch => {
    const res = await axios.post('/api/stripe',token);
    dispatch({type:FETCH_USER,payload:res.data});
}


