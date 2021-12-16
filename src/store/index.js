import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import characterReducer from './slices/characters'
import gryffindorReducer from './slices/gryffindor'
import staffReducer from './slices/staff'
import studentReducer from './slices/students'

export default configureStore({
  reducer: {
    counter: counterReducer,
    characters: characterReducer,
    gryffindor: gryffindorReducer,
    staff: staffReducer,
    students: studentReducer
  }
})
