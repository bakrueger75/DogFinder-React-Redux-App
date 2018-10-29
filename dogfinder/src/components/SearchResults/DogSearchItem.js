import React from 'react';
import {withRouter} from 'react-router-dom';
import DogImage from '../DogImage/DogImage';
import { MdInfoOutline } from  'react-icons/md';

const DogSearchItem = ({itemIndex, dog, history}) => {
  let detailUrl = "/detail/" + dog.breed + ((dog.subBreed) ? "/" + dog.subBreed : "");
  return (
    <div id={"dogBreed_"+itemIndex} className='col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 justify-content-center text-center p-2' key={itemIndex} style={{cursor: 'pointer'}} >
      <DogImage breedName={dog.breedName} breed={dog.breed} subBreed={dog.subBreed} onClick={() => {history.push(detailUrl)}} />
      <div id={"dogBreedName_"+itemIndex} onClick={() => {history.push(detailUrl)}} >
        <strong className="text-capitalize text-red text-center">
          {dog.breedName} <MdInfoOutline/>
        </strong>
      </div>
    </div>
  );
};

export default withRouter(DogSearchItem);
