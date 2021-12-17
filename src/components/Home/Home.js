import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  fetchAsyncCharacters,
  removeCharacters
} from '../../features/characters/charactersSlice'
import CharacterList from '../character/CharacterList'
import ModalComponent from '../../common/Modal/Modal'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import logo from '../../images/logo.png'

const Home = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    dispatch(fetchAsyncCharacters())
    return () => {
      dispatch(removeCharacters())
    }
  }, [dispatch])

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end'
        }}
      >
        <Button variant="contained" endIcon={<BookmarkIcon />}>
          FAVORITOS
        </Button>
        <Button
          variant="contained"
          endIcon={<PersonAddAltIcon />}
          onClick={handleOpen}
        >
          AGREGAR
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <img src={logo} alt="HarryPotterLogo" />
        </Box>
        <Typography component="div" variant="h4">
          <Box sx={{ textAlign: 'center', m: 1 }}>Selecciona tu Filtro</Box>
        </Typography>
      </Grid>
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
          <Button
            variant="outlined"
            onClick={() => {
              console.log('estudiantes')
            }}
          >
            ESTUDIANTES
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              console.log('staff')
            }}
          >
            STAFF
          </Button>
        </Stack>
      </Grid>
      <ModalComponent open={open} handleClose={handleClose} />
      <CharacterList />
    </Grid>
  )
}

export default Home
