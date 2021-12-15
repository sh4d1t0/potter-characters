import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import characterReducer from './slices/characters'

export default configureStore({
  reducer: {
    counter: counterReducer,
    characters: characterReducer
  }
})
