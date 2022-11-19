import React from 'react'
import Movie from './Movie.js'
import { v4 as uuidv4 } from 'uuid';

function MovieList({movieList}) {
    
  return (
    <div>
        {movieList.map((elm , id=uuidv4())=> <Movie movie={elm} key={id} />)}
    </div>
  )
}

export default MovieList