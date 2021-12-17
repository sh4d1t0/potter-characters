import React from 'react'
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField
} from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import { useFormik } from 'formik'

const FormComponent = () => {
  const [valuegen, setValuegen] = React.useState('female')
  const [valuepos, setValuepos] = React.useState('hogwartsStudent')
  const [value, setValue] = React.useState(new Date())
  const handleChange = event => {
    setValuegen(event.target.valuegen)
    setValuepos(event.target.valuepos)
  }
  const formik = useFormik({
    initialValues: {
      name: 'nombre',
      dateOfBirth: '',
      eyeColour: 'brown',
      hairColour: 'brown',
      hogwartsStudent: false,
      hogwartsStaff: false
    },
    //validationSchema: validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box
          component="form"
          noValidate
          sx={{
            display: 'grid',
            gridTemplateColumns: { sm: '1fr 1fr' },
            gap: 2
          }}
        >
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Nombre"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              disableFuture
              id="dateOfBirth"
              name="dateOfBirth"
              label="Cumpleaños"
              openTo="year"
              views={['year', 'month', 'day']}
              value={value}
              onChange={newValue => {
                setValue(newValue)
              }}
              renderInput={params => <TextField {...params} />}
              error={
                formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)
              }
              helperText={
                formik.touched.dateOfBirth && formik.errors.dateOfBirth
              }
            />
          </LocalizationProvider>
          <TextField
            fullWidth
            id="eyeColour"
            name="eyeColour"
            label="Color de ojos"
            value={formik.values.eyeColour}
            onChange={formik.handleChange}
            error={formik.touched.eyeColour && Boolean(formik.errors.eyeColour)}
            helperText={formik.touched.eyeColour && formik.errors.eyeColour}
          />
          <TextField
            fullWidth
            id="hairColour"
            name="hairColour"
            label="Color de pelo"
            value={formik.values.hairColour}
            onChange={formik.handleChange}
            error={
              formik.touched.hairColour && Boolean(formik.errors.hairColour)
            }
            helperText={formik.touched.hairColour && formik.errors.hairColour}
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Genero</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="controlled-radio-buttons-group"
              value={valuegen}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Mujer"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Hombre"
              />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend">Posicion</FormLabel>
            <RadioGroup
              row
              aria-label="position"
              name="controlled-radio-buttons-group"
              value={valuepos}
              onChange={handleChange}
            >
              <FormControlLabel
                value="hogwartsStudent"
                control={<Radio />}
                label="Estudiante"
              />
              <FormControlLabel
                value="hogwartsStaff"
                control={<Radio />}
                label="Staff"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </>
  )
}

export default FormComponent
