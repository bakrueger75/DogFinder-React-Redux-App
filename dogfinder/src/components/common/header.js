import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import headerIcon from '../../images/dogfinder-icon.png'
import SearchForm from './SearchForm';

export default class Header extends React.Component {
  render() {
    return (
		<div id="headerWidget" className="mt-2 mb-2">
      <div className="row">
        <div id="headerIcon" className="col-3 col-md-4 justify-content-right text-right">
          <Link to="/">
            <img src={headerIcon} alt="Dog Finder" />
          </Link>
        </div>
        <div className="col-9 col-md-8">
            <div className="col-12">
              <h2 id="font-red" className="">Dog Finder</h2>
            </div>
            <div className="col-12">
              <div id="navbar" className="text-left align-bottom">
                <nav>
                  <NavLink to="/" activeClassName="active">Home</NavLink>
                  {"  |  "}
                  <NavLink to="/about" activeClassName="active">About</NavLink>
                </nav>
              </div>
            </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12">
          <SearchForm />
        </div>
      </div>
		</div>
	);
  }
}
