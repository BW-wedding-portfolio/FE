
// const initialState = {
//       event: [],
//       isEditing: false,
//       error:"",

// }

// export const editReducer=(state=initialState, action) => {
//       switch (action.type) {
//             case EDIT_CARD_START:
//               return {
//                 ...state,
//                 isEditing: true,
//                 error: null
//               };
//             case EDIT_CARD_SUCCESS:
//                   console.log(action.payload)
//               return {
//                 ...state,
//                 isEditing: false,
//                 user: action.payload
//               };
//             case EDIT_CARD_FAILURE:
//               return {
//                 ...state,
//                 isEditing: false,
//                 error: action.payload
//               };
//               default:
//                 return state;
//             }
// } 