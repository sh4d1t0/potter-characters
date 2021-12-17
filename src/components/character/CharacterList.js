import React from 'react'
import { useSelector } from 'react-redux'
import { getAllCharacters } from '../../features/characters/charactersSlice'
import CharacterCard from '../../common/Card/CharacterCard'
import { Grid } from '@mui/material'

const CharacterList = () => {
  const characters = useSelector(getAllCharacters)
  let renderCharacters = ''

  renderCharacters = characters.map((character, index) => (
    <Grid key={index} item xs={12} md={6}>
      <CharacterCard data={character} />
    </Grid>
  ))

  return <>{renderCharacters}</>
}

export default CharacterList
