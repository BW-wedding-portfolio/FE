
// const initialState = {
//       card: [],
//       isDeleting: false,
//       error:"",

// }

// export const deleteReducer=(state=initialState, action) => {
//       switch (action.type) {
//             case DELETE_CARD_START:
//               return {
//                 ...state,
//                 isDeleting: true,
//                 error: null
//               };
//             case DELETE_CARD_SUCCESS:
//                   console.log(action.payload)
//               return {
//                 ...state,
//                 isDeleting: false,
//                 user: action.payload
//               };
//             case DELETE_CARD_FAILURE:
//               return {
//                 ...state,
//                 isDeleting: false,
//                 error: action.payload
//               };
//               default:
//                 return state;
//             }
// } 