import * as types from './actionTypes';
import dogFinderApi from '../api/dogFinderApi';
import dogSearchApi from '../api/dogSearchApi';

export function breedListLoadSuccess(breedList) {
  return {type: types.BREED_LIST_LOADED, breedList};
}

export function allBreedsLoadSuccess(allBreeds) {
  return {type: types.ALL_BREEDS_LOADED, allBreeds};
}

export function searchSuccess(searchResults) {
  return {type: types.SEARCH_SUCCESS, searchResults};
}

export function loadBreedList() {
  return function(dispatch) {
    return dogFinderApi.getDogList().then(breedList => {
      dispatch(breedListLoadSuccess(breedList));
    });
  };
}

export function loadAllBreeds() {
  return function(dispatch) {
    return dogFinderApi.getAllBreeds().then(allBreeds => {
      dispatch(allBreedsLoadSuccess(allBreeds));
    });
  };
}

export function dogSearch(searchTerm, breedSearch) {
  return function(dispatch, getState) {
    return dogSearchApi.performDogSearch(searchTerm, breedSearch, getState().allBreeds).then(searchResults => {
      dispatch(searchSuccess(searchResults));
    });
  };
}
