import React from 'react'
import { useSelector } from 'react-redux'
import { getAllStudents } from '../../features/characters/charactersSlice'
import CharacterCard from '../../common/Card/CharacterCard'
import { Grid } from '@mui/material'
import Header from '../../common/Header/Header'

const CharacterStudentsList = () => {
  const students = useSelector(getAllStudents)
  let renderStudents = ''

  renderStudents = students.map((students, index) => (
    <Grid key={index} item xs={12} md={6}>
      <CharacterCard data={students} />
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
      {renderStudents}
    </Grid>
  )
}

export default CharacterStudentsList
