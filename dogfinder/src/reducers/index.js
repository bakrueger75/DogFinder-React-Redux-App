import {combineReducers} from 'redux';
import breedList from './breedListReducer';
import allBreeds from './allBreedsReducer';
import searchResults from './searchResultsReducer';

const rootReducer = combineReducers({
  allBreeds,
  breedList,
  searchResults
});

export default rootReducer
