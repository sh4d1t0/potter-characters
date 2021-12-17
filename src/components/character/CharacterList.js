import React from 'react'
import { useSelector } from 'react-redux'
import { getAllCharacters } from '../../features/characters/charactersSlice'
import CharacterCard from '../../common/Card/CharacterCard'
import { Grid } from '@mui/material'

const CharacterList = () => {
  const characters = useSelector(getAllCharacters)
  return (
    <>
      {characters.map((character, index) => (
        /* puede haber un lg={4} */
        <Grid item xs={12} md={6}>
          <CharacterCard key={index} data={character} />
        </Grid>
      ))}
    </>
  )
}

export default CharacterList
