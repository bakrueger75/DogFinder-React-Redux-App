import React from 'react';
import headerImage from '../images/dogs-header.jpg'

export default class DogFinder extends React.Component {
  render() {
    return (
		<div id="homePage">
      <div className="w-100 justify-content-center text-center">
        <img className="col-lg-6 col-md-8 col-sm-11 col-11" src={headerImage} alt="Dog Finder" />
        <div>Welcome to Dog Finder!<br/>Use the search bar/dropdown to find pictures and details about your favorite dogs.</div>
      </div>
		</div>
    );
  }
}
