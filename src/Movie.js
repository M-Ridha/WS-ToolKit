import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteMovie } from './Redux/Slices/CounterSlice'

function Movie({ movie }) {
    
    const dispatch = useDispatch()
    
    const handleDelte = (e) => {
        e.preventDefault()
        dispatch(deleteMovie(movie.id))
    }
    
    return (
        <div>
            <hr></hr>
            <h4> {movie.title} </h4>
            <img src={movie.image} alt="movie" style={{ width: "150px" }} />
            {movie.id}
            <div>
                <button onClick={handleDelte}> delete </button>
            </div>
            <hr></hr>
        </div>
    )
}

export default Movie