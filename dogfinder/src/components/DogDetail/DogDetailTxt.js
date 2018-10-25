import React from 'react';
import DogFinderApi from '../../api/dogFinderApi';

export default class DogDetail extends React.Component {
  constructor(props) {
	  super(props);
	  this.state = {
      dogDetails: {
        pageId: 0,
        details: ''
      }
	  }
    this.fetchDogDetails = this.fetchDogDetails.bind(this);
	}

  fetchDogDetails(breed, subBreed) {
    DogFinderApi.getWikipediaDogDetails(breed, subBreed)
      .then((dogDetails) => {
        this.setState({
          dogDetails: dogDetails
        })
      });
  }
  componentDidMount() {
    this.fetchDogDetails(this.props.breed, this.props.subBreed);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.breed !== this.props.breed) {
      this.fetchDogDetails(this.props.breed, this.props.subBreed);
    }
  }

  render() {
      if (this.state.dogDetails.pageId === 0) {
        return (
          <div id="dogDetailTxt">
            Loading
      		</div>
        );
      } else {
        return (
          <div id="dogDetailTxt">
            <div dangerouslySetInnerHTML={{__html: this.state.dogDetails.details}} />
            <div>For more information visit <a href={"http://en.wikipedia.org/?curid="+this.state.dogDetails.pageId} target="_blank">Wikipedia</a>.</div>
      		</div>
        );
      }
  }
}
