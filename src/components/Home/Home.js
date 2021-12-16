import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getCharacters from '../../api/hp-charactersApi'
import { setCharactersList } from '../../features/characters/charactersSlice'
import CharacterList from '../character/CharacterList'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchAllCharacters = async () => {
      const response = await getCharacters.get().catch(error => {
        console.log('Error:', error)
      })
      dispatch(setCharactersList(response.data))
    }
    fetchAllCharacters()
  }, [])

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography component="div" variant="h3">
            <Box sx={{ textAlign: 'center', m: 1 }}>Personajes</Box>
          </Typography>
        </Grid>
        <CharacterList />
      </Grid>
    </>
  )
}

export default Home
