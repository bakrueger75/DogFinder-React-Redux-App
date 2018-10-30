import delay from './delay';

export default class DogSearchApi {

  static performDogSearch(searchTerm, breedSearch, allBreeds) {
		return new Promise((resolve, reject) => {

			let dogResults = {
				"dogCount": 0,
				"searchTerm": searchTerm,
				"breedSearch": breedSearch,
				"dogResults": []
			};
			if (allBreeds != null && searchTerm != null && searchTerm.length > 0) {
				let dogMatches = [];
        let matchCount = 0;
				let breedList = Object.keys(allBreeds);
        let searchTerms = decodeURI(searchTerm.toLowerCase()).split(" ");
        let searchMatches = [...breedList.filter(dogBreed => {
          let termCount = 0;
          searchTerms.forEach((searchTerm) => {
            if (dogBreed.indexOf(searchTerm) >= 0) {
              termCount++;
            }
          });
          // Only filter the result if the breedName has a match on all of the search terms.
          if (termCount === searchTerms.length) {
            return true;
          } else {
            return false;
          }
        })];

				if (searchMatches.length > 0) {
          searchMatches.forEach((breedName) => {
            matchCount++;
            let dogMatch = {
						  "breed": allBreeds[breedName].breed,
				 			"breedName": breedName,
				 			"subBreed": allBreeds[breedName].subBreed
				 		};
				 		dogMatches.push(dogMatch);
          });
				}

				dogResults.dogCount = matchCount;
        dogResults.searchTerm = searchTerm;
        dogResults.breedSearch = breedSearch;
				if (dogMatches.length > 0) {
					// Sort the dog results alphabetically by breedName
					dogMatches.sort((a,b) => {
						if (a.breedName < b.breedName) return -1;
						if (a.breedName > b.breedName) return 1
						return 0;
					});
					dogResults.dogResults = dogMatches;
				} else {
					dogResults.dogResults = [];
				}
        setTimeout(() => {
          resolve(dogResults);
        }, delay);
			} // searchTerm if block
		});
	} // performDogSearch
}
