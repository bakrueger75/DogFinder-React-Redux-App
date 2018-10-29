import React from 'react';
//import SearchResults from './SearchResults';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import DogSearchItem from './DogSearchItem';

class SearchResultsPage extends React.Component {
  render() {
    const searchResults = this.props.searchResults;
    if (searchResults != null && searchResults.dogCount && searchResults.dogCount > 0) {
  		// Render the search results
  		var dogsLabel = "Dog";
  		if (searchResults.dogCount > 1 || searchResults.dogCount === 0) {
  			dogsLabel = "Dogs";
  		}
  		return (
  			<div id="dogSearchResults" className="row w-100 p-2 justify-content-center">
  				<div id="dogCount" className="row w-100 justify-content-center mt-2"><h4>{searchResults.dogCount} {dogsLabel} Found</h4></div>
          <div id="searchTerm" className="row w-100 justify-content-center mb-2 text-capitalize">{searchResults.breedSearch ? "Breed: " : "Searched For: "} {searchResults.searchTerm}</div>
  				<div id="dogResultsList" className="row w-100 justify-content-center m-2">
  					{searchResults.dogResults.map((dogResult, index) => (
  						<DogSearchItem key={index} itemIndex={index} dog={dogResult} history={this.props.history} />
  					))}
  				</div>
  				<div style={{clear:'both'}}></div>
  			</div>
  		);
  	} else {
  		// Render an empty div, no search results yet.
  		return (
  			<div id="dogSearchResults"  className="row w-100 p-2 justify-content-center dogSearchResults">
          <div id="dogCount" className="row w-100 justify-content-center mt-2"><h4>No Dogs Found.</h4></div>
          <div id="searchTerm" className="row w-100 justify-content-center mb-2 text-capitalize">{((searchResults.searchTerm) ? "Searched For: " + searchResults.searchTerm : "")}</div>
        </div>
  		);
  	}
  }
}

function mapStateToProps(state, ownProps) {
    return {
      searchResults: state.searchResults
    };
}

export default withRouter(connect(mapStateToProps)(SearchResultsPage));
