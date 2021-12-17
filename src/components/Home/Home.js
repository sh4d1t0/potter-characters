import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getCharacters from '../../api/hp-charactersApi'
import { setCharactersList } from '../../features/characters/charactersSlice'
import CharacterList from '../character/CharacterList'
import ModalComponent from '../../common/Modal/Modal'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Stack,
  Typography
} from '@mui/material'

const Home = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={12}>
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
        <Typography component="div" variant="h4">
          <Box sx={{ textAlign: 'center', m: 1 }}>Selecciona tu Filtro</Box>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Stack spacing={2} direction="row">
            <Button
              onClick={() => {
                console.log('estudiantes')
              }}
            >
              ESTUDIANTES
            </Button>
            <Button
              onClick={() => {
                console.log('staff')
              }}
            >
              STAFF
            </Button>
          </Stack>
        </ButtonGroup>
      </Grid>
      <ModalComponent open={open} handleClose={handleClose} />
      <CharacterList />
    </Grid>
  )
}

export default Home
