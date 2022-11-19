import {configureStore} from '@reduxjs/toolkit'
import {ConterReducer} from '../Slices/CounterSlice'

export default configureStore({reducer : {ConterReducer}})