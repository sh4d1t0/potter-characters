import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const baseUrl = 'http://localhost:5000/gryffindor'

export const gryffindorSlice = createSlice({
  name: 'gryffindor',
  initialState: {
    list: []
  },
  reducers: {
    setGriffindorList: (state, action) => {
      state.list = action.payload
    }
  }
})

export const { setGriffindorList } = gryffindorSlice.actions

export default gryffindorSlice.reducer

export const fetchAllGriffindor = () => dispatch => {
  axios
    .get(baseUrl)
    .then(response => {
      dispatch(setGriffindorList(response.data))
    })
    .catch(error => console.log(error))
}
