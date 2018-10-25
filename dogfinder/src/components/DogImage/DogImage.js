import React from 'react';
import DogFinderApi from '../../api/dogFinderApi';
import loadingImage from '../../images/image-loading.gif';
import { MdRefresh } from  'react-icons/md';

export default class DogImage  extends React.Component {
  constructor(props) {
	  super(props);
	  this.state = {
      imageUrl: loadingImage
	  }
	}

  fetchImage(breed, subBreed) {
    this.setState({
      imageUrl: loadingImage
    });
    DogFinderApi.fetchDogImage(breed, subBreed)
      .then((dogImage) => {
        this.setState({
          imageUrl: dogImage
        });
      });
  }

  componentDidMount() {
    this.fetchImage(this.props.breed, this.props.subBreed);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.breed !== this.props.breed) {
      this.fetchImage(this.props.breed, this.props.subBreed);
    }
  }

  render() {
    return (
      <div style={{position: 'relative'}}>
        <img className="dogResultImg" src={this.state.imageUrl} alt={this.props.breedName} onClick={(this.props.onClick) ? this.props.onClick : null} />
        <div style={{position: 'absolute', bottom: '0', right: '50%', cursor:'pointer', color:'yellow', font: '18px'}} onClick={() => {this.fetchImage(this.props.breed, this.props.subBreed)}}><MdRefresh size={24} /></div>
      </div>
    );
  }
};
