import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Stack } from '@mui/material'

const Filter = () => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    >
      <Stack spacing={2} direction="row">
        <Button variant="outlined" component={RouterLink} to="/students">
          Estudiantes
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" component={RouterLink} to="/staff">
          Staff
        </Button>
      </Stack>
    </Grid>
  )
}

export default Filter
