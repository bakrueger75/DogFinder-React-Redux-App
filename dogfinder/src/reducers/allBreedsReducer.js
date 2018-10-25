import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function breedListReducer(state = initialState.allBreeds, action) {
  switch(action.type) {
    case types.ALL_BREEDS_LOADED:
      return action.allBreeds;
    default:
      return state;
  }
}
