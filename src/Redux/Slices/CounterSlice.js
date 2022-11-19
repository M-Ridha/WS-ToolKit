import {createSlice } from '@reduxjs/toolkit'


const CounterSlice = createSlice ({

    name : "counter" ,

    initialState : {
        count : 0 ,
        toggle : true , 
        movieList : [
            {
                title : " 12 angry men" ,
                image : "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
                id : "01"
            }
        ]
    } ,

    reducers : {

        incriment : (state ) => {
            state.count += 1
        } ,

        decriment : (state ) => {
            state.count -= 1
        } ,

        ShowHide : (state) => {
            state.toggle = !state.toggle
        },

        addNewMovies : (state , action) => {
            state.movieList.push(action.payload)
        },

        deleteMovie : (state , action) => {
            state.movieList = state.movieList.filter(el=>el.id !== action.payload )
        }
    }
})

export  const ConterReducer =  CounterSlice.reducer
export  const  {incriment , decriment , ShowHide , addNewMovies , deleteMovie } = CounterSlice.actions

