import React, { useState } from 'react';
import './style.css';

export default () => {
  const [query, setQuery] = useState('');

  const searchMovies = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=50d0322205baa0f5670cd1de9ddcbe68&language=pt-BR&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form class='form' onSubmit={searchMovies}>
      <label class='label' htmlFor='query'>
        Movie Name
      </label>
      <input type='text' name='query' placeholder='Fight Club'></input>
      <button className='button' type='submit'>
        Search
      </button>
    </form>
  );
};
