import {registerReducer} from './registerReducer';
import {loginReducer} from './logInReducer';
import {createReducer} from './createReducer';
import {editReducer} from './editReducer';
import {deleteReducer} from './deleteReducer';

import { combineReducers } from 'redux';




export default combineReducers( {
      registerReducer, loginReducer, createReducer, editReducer, deleteReducer
})