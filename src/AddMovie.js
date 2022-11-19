import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addNewMovies} from './Redux/Slices/CounterSlice'
import { v4 as uuidv4 } from 'uuid';

function AddMovie() {

    const [movieInput, setMovieInput] = useState({id :uuidv4()})
    
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setMovieInput({...movieInput , [e.target.name]:e.target.value})
    }
    
    

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNewMovies(movieInput))
    }

    return (
        <div>
            <form>
                <input placeholder='Movie Title' name='title' onChange={handleChange} />
                <input placeholder='Movie Poster' name='image' onChange={handleChange} />
            </form>
            <button onClick={handleSubmit}> Add Movie </button>



        </div>
    )
}

export default AddMovie