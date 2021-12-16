import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const baseUrl = 'http://localhost:5000/students'

export const studentsSlice = createSlice({
  name: 'students',
  initialState: {
    list: []
  },
  reducers: {
    setStudentsList: (state, action) => {
      state.list = action.payload
    }
  }
})

export const { setStudentsList } = studentsSlice.actions

export default studentsSlice.reducer

export const fetchAllStudents = () => dispatch => {
  axios
    .get(baseUrl)
    .then(response => {
      dispatch(setStudentsList(response.data))
    })
    .catch(error => console.log(error))
}
