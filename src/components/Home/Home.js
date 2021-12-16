import {
  Box,
  Button,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getCharacters from '../../api/hp-charactersApi'
import { setCharactersList } from '../../features/characters/charactersSlice'
import CharacterList from '../character/CharacterList'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import { useFormik } from 'formik'

const Home = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  }

  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar'
    },
    //validationSchema: validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
      <CharacterList />
    </Grid>
  )
}

export default Home
