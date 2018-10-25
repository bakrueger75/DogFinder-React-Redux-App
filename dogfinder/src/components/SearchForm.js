import React from 'react';
import spinnerImage from '../images/spinner-gif-17.gif';
import * as dogFinderActions from '../actions/dogFinderActions';
import { MdSearch } from 'react-icons/md';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
  constructor(props) {
	  super(props);
	  this.state = {
		  error: null,
		  searchLoading: false
	  }

	  this.dogSearchKeyup = this.dogSearchKeyup.bind(this);
    this.dogSearchClick = this.dogSearchClick.bind(this);
	  this.breedSelected = this.breedSelected.bind(this);
	  this.dogSearch = this.dogSearch.bind(this);
    this.searchRedirect = this.searchRedirect.bind(this);
  }

  searchRedirect(searchResults) {
    if (searchResults.dogCount === 1) {
      this.context.router.history.push("/detail/" + searchResults.dogResults[0].breed + ((searchResults.dogResults[0].subBreed) ? "/" + searchResults.dogResults[0].subBreed : ""));
    } else {
      this.context.router.history.push('/search');
    }
  }

  dogSearch(searchTerm, breedSearch) {
	  this.setState({
		  searchLoading: true
	  });
    this.props.actions.dogSearch(searchTerm, breedSearch, this.props.allBreeds)
      .then(() => {
        this.setState({
    		  searchLoading: false
    	  });
        this.searchRedirect(this.props.searchResults);
      });
  }

  breedSelected(e) {
    this.dogSearch(e.target.value, true);
  }

  dogSearchKeyup(e) {
	  if (e.key === "Enter") {
		  this.dogSearch(e.target.value, false);
	  }
  }

  dogSearchClick() {
    this.dogSearch(this.refs.dogSearchTerm.value, false);
  }

  render() {
	if (this.state.error) {
    return (
      <div id="dogSearchForm" className="row justify-content-left text-danger m-4">
				Failed to load, please try again later.
			</div>
    );
	} else if (this.props.breedList.length === 0 || this.state.searchLoading) {
		return (
      <div id="dogSearchForm" className="row justify-content-center text-center">
				<div className='searchSpinner'><img src={spinnerImage} alt="Processing..."/></div>
			</div>
    );
	} else {
		return (
			<div id="dogSearchForm" className="form-row align-items-center justify-content-center mt-2">
				<div className="col-12 col-md-3 justify-content-right">
					<select className="form-control text-capitalize" id="breedList" onChange={this.breedSelected} ref="breedList">
						<option className="text-capitalize" value="">Choose a Breed</option>
						{ this.props.breedList.map((breed, index) => (
							<option className="text-capitalize" key={index} value={breed}>{breed}</option>
						))}
					</select>
				</div>

				<div className="col-12 col-md-1 p-md-1 p-2 justify-content-center text-center font-weight-bold">OR</div>

        <div className="col-12 col-md-3 justify-content-left">
  				<div className="input-group">
            <input className="form-control" name="dogSearchTerm" id="dogSearchTerm" placeholder="Search for a dog" type="input" ref="dogSearchTerm" onKeyUp={this.dogSearchKeyup}/>
              <div className="input-group-append" style={{cursor: 'pointer'}}>
                <div className="input-group-text"><MdSearch onClick={this.dogSearchClick}/></div>
              </div>
  				</div>
        </div>
			</div>
		);
	}
  }
}

SearchForm.contextTypes = {
  router: PropTypes.object
};


function mapStateToProps(state, ownProps) {
    return {
      breedList: state.breedList,
      searchResults: state.searchResults,
      allBreeds: state.allBreeds
    };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dogFinderActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
