import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {


    const movies = useSelector(store => store?.movies?.nowPlayingMovies)

    if(movies===null) return;

    const mainMovie=movies[0];
    const {title,overview,id} = mainMovie;
    
    return (
    <div className='  md:pr-0 '>
      <VideoTitle title={title}  overView={overview}/> 
      <VideoBackground movieId={id}/>
    </div>
  );
}

export default MainContainer;
