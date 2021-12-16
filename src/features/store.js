import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import characterReducer from './characters/charactersSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    characters: characterReducer
  }
})
