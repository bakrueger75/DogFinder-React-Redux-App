import React from 'react';
import { Route } from 'react-router-dom';
import home from './components/home';
import DogDetail from './components/DogDetail/DogDetail';
import AboutPage from './components/about/aboutPage.js';
import SearchResultsPage from './components/SearchResultsPage';

// This contains all of the routes for the Dog Finder application.
export default (
  <div>
    <Route exact path="/" component={home} />
    <Route exact path="/home" component={home} />
    <Route path="/detail/:breed/:subBreed?" component={DogDetail} />
    <Route path="/search" component={SearchResultsPage} />
    <Route exact path="/about" component={AboutPage} />
  </div>
);
