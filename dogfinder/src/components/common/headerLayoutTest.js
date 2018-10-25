import React from 'react';
import { NavLink } from 'react-router-dom';
import headerIcon from '../../images/dogfinder-icon.png'
import SearchForm from '../SearchForm';

export default class Header extends React.Component {
  render() {
    return (
		<div className="row align-items-start mt-2">
        <div class="col-6">
          ICON<br/>ICON<br/>ICON<br/>ICON<br/>ICON<br/>ICON<br/>
        </div>
        <div className="col-6">
          TITLE AND NAV
        </div>
        <div className="col-6">
          SEARCH FIELDS
        </div>
		</div>
	);
  }
}
