
// import { SET_ALERT, SET_LOADING, GET_USER, ADD_USER, REQUEST_LOGIN, LOGIN_ERROR } from "../types";

// export default  (state, action) => {
//     switch(action.type) {
//         case SET_LOADING: 
//         return {
//             ...state,
//             loading: true
//         }
//         case GET_USER:
//             return {
//                 ...state,
//                 user: action.payload,
//                 loading: false
//         }
//         case ADD_USER:
//             return {
//                 ...state,
//                 user:action.payload,
//                 loading:false
//             }
//         case LOGIN_ERROR:
//             return {
//                 ...state,
//                 loading: false,
//                 errorText: action.error
//             }
//         default: 
//         return state;
//     }
// }                           