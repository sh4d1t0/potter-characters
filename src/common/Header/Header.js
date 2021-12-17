import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  fetchAsyncCharacters,
  fetchAsyncStaff,
  fetchAsyncStudents,
  removeCharacters
} from '../../features/characters/charactersSlice'
import ModalComponent from '../../common/Modal/Modal'
import Filter from '../../components/Filter/Filter'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import { Box, Button, Grid, Typography } from '@mui/material'
import logo from '../../images/logo.png'

const Header = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    dispatch(fetchAsyncCharacters())
    dispatch(fetchAsyncStaff())
    dispatch(fetchAsyncStudents())
    return () => {
      dispatch(removeCharacters())
    }
  }, [dispatch])

  return (
    <>
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
      <Filter />
      <ModalComponent open={open} handleClose={handleClose} />
    </>
  )
}

export default Header
