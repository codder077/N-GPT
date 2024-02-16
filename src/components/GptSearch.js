import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';

import bag_img from '../log.png';

const GptSearch = () => {
  return (
    <>
    <div className=" w-full fixed -z-10">
        <img className=" w-full " src={bag_img} alt="logo" />
    </div>
    <div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
    </>
    
  );
}

export default GptSearch;
