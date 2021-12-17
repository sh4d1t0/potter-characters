import React from 'react'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography
} from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark'

const CharacterCard = props => {
  const { data } = props
  return (
    <Grid key={data.name} container justifyContent="center" alignItems="center">
      {/* Si se agrega en CharacterList la propiedad lg, recuerda agregar lg={12} */}
      <Grid item xs={12} sm={8} md={10}>
        <Card sx={{ display: 'flex', borderRadius: '16px' }}>
          <Box
            className={
              data.house === 'Ravenclaw'
                ? 'Ravenclaw'
                : data.house === 'Slytherin'
                ? 'Slytherin'
                : data.house === 'Hufflepuff'
                ? 'Hufflepuff'
                : 'Gryffindor'
            }
            sx={{
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <CardContent
              sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}
            >
              <Avatar
                sx={{ width: 150, height: 150 }}
                src={data.image}
                alt="personaje"
              />
            </CardContent>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <CardContent
              sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 2
              }}
            >
              <Grid item xs={8}>
                <Typography component="div" variant="body2">
                  <Box sx={{ textAlign: 'left' }}>
                    {data.alive === true ? 'VIVO' : 'FINADO'} /{' '}
                    {data.hogwartsStudent === true ? 'ESTUDIANTE' : 'STAFF'}
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ textAlign: 'right' }}>
                  <IconButton aria-label="favorite">
                    <BookmarkIcon />
                  </IconButton>
                </Box>
              </Grid>
            </CardContent>
            <Typography component="div" variant="h6">
              <Box sx={{ textAlign: 'center', m: 1 }}>{data.name}</Box>
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="subtitle2">
                  <Box sx={{ textAlign: 'left' }}>
                    Cumpleaños: {data.dateOfBirth}
                  </Box>
                  <Box sx={{ textAlign: 'left' }}>Genero: {data.gender}</Box>
                  <Box sx={{ textAlign: 'left' }}>
                    Color de ojos: {data.eyeColour}
                  </Box>
                  <Box sx={{ textAlign: 'left' }}>
                    Color de pelo: {data.hairColour}
                  </Box>
                </Typography>
              </CardContent>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  )
}

export default CharacterCard
