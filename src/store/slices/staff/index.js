import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const baseUrl = 'http://localhost:5000/staff'

export const staffSlice = createSlice({
  name: 'staff',
  initialState: {
    list: []
  },
  reducers: {
    setStaffList: (state, action) => {
      state.list = action.payload
    }
  }
})

export const { setStaffList } = staffSlice.actions

export default staffSlice.reducer

export const fetchAllStaff = () => dispatch => {
  axios
    .get(baseUrl)
    .then(response => {
      dispatch(setStaffList(response.data))
    })
    .catch(error => console.log(error))
}
