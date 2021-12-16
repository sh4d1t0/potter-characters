import { createSlice } from '@reduxjs/toolkit'

export const characterSlice = createSlice({
  name: 'characters',
  initialState: {
    list: [],
    student: []
  },
  reducers: {
    setCharactersList: (state, action) => {
      state.list = action.payload
    }
  }
})

export const { setCharactersList } = characterSlice.actions

export const getAllCharacters = state => state.characters.list

export default characterSlice.reducer
