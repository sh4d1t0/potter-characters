import React from 'react'
import { useSelector } from 'react-redux'
import { getAllStaff } from '../../features/characters/charactersSlice'
import CharacterCard from '../../common/Card/CharacterCard'
import { Grid } from '@mui/material'
import Header from '../../common/Header/Header'

const CharacterStaffList = () => {
  const staff = useSelector(getAllStaff)
  let renderStaff = ''

  renderStaff = staff.map((staff, index) => (
    <Grid key={index} item xs={12} md={6}>
      <CharacterCard data={staff} />
    </Grid>
  ))

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Header />
      {renderStaff}
    </Grid>
  )
}

export default CharacterStaffList
