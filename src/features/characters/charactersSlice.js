import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import getCharacters from '../../api/hp-charactersApi'

export const fetchAsyncCharacters = createAsyncThunk(
  'characters/fetchAsyncCharacters',
  async () => {
    const response = await getCharacters.get()
    return response.data
  }
)

const initialState = {
  characters: [],
  student: []
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
    }
  }
})

export const { removeCharacters } = characterSlice.actions

export const getAllCharacters = state => state.characters.characters

export default characterSlice.reducer
