import { configureStore } from '@reduxjs/toolkit'
import characterReducer from './characters/charactersSlice'

export default configureStore({
  reducer: {
    characters: characterReducer
  }
})
