import React from 'react'
import CharacterList from '../character/CharacterList'
import { Grid } from '@mui/material'
import Header from '../../common/Header/Header'

const Home = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Header />
      <CharacterList />
    </Grid>
  )
}

export default Home
