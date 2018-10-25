import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function searchResultsReducer(state = initialState.searchResults, action) {
  switch(action.type) {
    case types.SEARCH_SUCCESS:
      return action.searchResults;
    default:
      return state;
  }
}
