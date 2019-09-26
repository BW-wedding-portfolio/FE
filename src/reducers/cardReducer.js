const initialState = {
  card: [],
  isDeleting: false,
  isEditing: false,
  isCreating: false,
  error: ""
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    // case DELETE_CARD_START:
    //   return {
    //     ...state,
    //     isDeleting: true,
    //     error: null
    //   };
    // case DELETE_CARD_SUCCESS:
    //   console.log(action.payload);
    //   return {
    //     ...state,
    //     isDeleting: false
    //   };
    // case DELETE_CARD_FAILURE:
    //   return {
    //     ...state,
    //     isDeleting: false,
    //     error: action.payload
    //   };
    // case EDIT_CARD_START:
    //   return {
    //     ...state,
    //     isEditing: true,
    //     error: null
    //   };
    // case EDIT_CARD_SUCCESS:
    //   console.log(action.payload);
    //   return {
    //     ...state,
    //     isEditing: false,
    //     user: action.payload
    //   };
    // case EDIT_CARD_FAILURE:
    //   return {
    //     ...state,
    //     isEditing: false,
    //     error: action.payload
    //   };
    // case LOG_USER_START:
    //   return {
    //     ...state,
    //     isCreating: true,
    //     error: null
    //   };
    // case LOG_USER_SUCCESS:
    //   console.log(action.payload);
    //   return {
    //     ...state,
    //     isCreating: false,
    //     user: action.payload
    //   };
    // case LOG_USER_FAILURE:
    //   return {
    //     ...state,
    //     isCreating: false,
    //     error: action.payload
    //   };
    default:
      return state;
  }
};
