import React from 'react';
import {withRouter} from 'react-router-dom';
import DogImage from './DogImage/DogImage';
import { MdInfoOutline } from  'react-icons/md';

//const DogSearchItem = ({itemIndex, dog}) => {
class DogSearchItem  extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.dogDetails = this.dogDetails.bind(this);
  }

  dogDetails() {
    this.props.history.push("/detail/" + this.props.dog.breed + ((this.props.dog.subBreed) ? "/" + this.props.dog.subBreed : ""));
  }

  render() {
    return (
      <div id={"dogBreed_"+this.props.itemIndex} className='col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 justify-content-center text-center p-2' key={this.props.itemIndex} style={{cursor: 'pointer'}} >
        <DogImage breedName={this.props.dog.breedName} breed={this.props.dog.breed} subBreed={this.props.dog.subBreed} onClick={this.dogDetails} />
        <div id={"dogBreedName_"+this.props.itemIndex} onClick={this.dogDetails} >
          <h4 className="text-capitalize text-red text-center">
            {this.props.dog.breedName} <MdInfoOutline/>
          </h4>

        </div>
      </div>
    );
  }
};

export default withRouter(DogSearchItem);
