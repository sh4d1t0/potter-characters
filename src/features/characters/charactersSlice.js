import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import getCharacters from '../../api/hp-charactersApi'
import getStaff from '../../api/hp-staffApi'
import getStudents from '../../api/hp-studentsApi'

export const fetchAsyncCharacters = createAsyncThunk(
  'characters/fetchAsyncCharacters',
  async () => {
    const response = await getCharacters.get()
    return response.data
  }
)

export const fetchAsyncStaff = createAsyncThunk(
  'characters/fetchAsyncStaff',
  async () => {
    const response = await getStaff.get()
    return response.data
  }
)

export const fetchAsyncStudents = createAsyncThunk(
  'characters/fetchAsyncStudents',
  async () => {
    const response = await getStudents.get()
    return response.data
  }
)

const initialState = {
  characters: [],
  staff: [],
  students: []
}

export const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    removeCharacters: state => {
      state.characters = []
    }
  },
  extraReducers: {
    [fetchAsyncCharacters.pending]: () => {
      console.log('Pendiente')
    },
    [fetchAsyncCharacters.fulfilled]: (state, { payload }) => {
      console.log('Exitoso')
      return { ...state, characters: payload }
    },
    [fetchAsyncCharacters.rejected]: () => {
      console.log('Rechazado')
    },
    [fetchAsyncStaff.fulfilled]: (state, { payload }) => {
      console.log('Exitoso')
      return { ...state, staff: payload }
    },
    [fetchAsyncStudents.fulfilled]: (state, { payload }) => {
      console.log('Exitoso')
      return { ...state, students: payload }
    }
  }
})

export const { removeCharacters } = characterSlice.actions

export const getAllCharacters = state => state.characters.characters
export const getAllStaff = state => state.characters.staff
export const getAllStudents = state => state.characters.students

export default characterSlice.reducer
