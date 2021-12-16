import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const baseUrl = 'http://localhost:5000/characters'

export const characterSlice = createSlice({
  name: 'characters',
  initialState: {
    list: []
  },
  reducers: {
    setCharactersList: (state, action) => {
      state.list = action.payload
    }
  }
})

export const { setCharactersList } = characterSlice.actions

export default characterSlice.reducer

export const fetchAllCharacters = () => dispatch => {
  axios
    .get(baseUrl)
    .then(response => {
      dispatch(setCharactersList(response.data))
    })
    .catch(error => console.log(error))
}
