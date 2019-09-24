
// const initialState = {
//       card: [],
//       isCreating: false,
//       error:"",

// }

// export const createReducer=(state=initialState, action) => {
//       switch (action.type) {
//             case LOG_USER_START:
//               return {
//                 ...state,
//                 isCreating: true,
//                 error: null
//               };
//             case LOG_USER_SUCCESS:
//                   console.log(action.payload)
//               return {
//                 ...state,
//                 isCreating: false,
//                 user: action.payload
//               };
//             case LOG_USER_FAILURE:
//               return {
//                 ...state,
//                 isCreating: false,
//                 error: action.payload
//               };
//               default:
//                 return state;
//             }
// } 