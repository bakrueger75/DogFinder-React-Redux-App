import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function breedListReducer(state = initialState.breedList, action) {
  switch(action.type) {
    case types.BREED_LIST_LOADED:
      return action.breedList;
    default:
      return state;
  }
}
