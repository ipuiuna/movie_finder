import React from 'react';
import SearchMovie from '../../components/SearchMovies';
import './style.css';

export default (props) => {
  return (
    <div class='container'>
      <h1 class='title'>React Movie Search</h1>
      <SearchMovie />
    </div>
  );
};
