import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount
} from './counterSlice'
import { Box, Button, Stack, TextField } from '@mui/material'

export function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Button
          variant="contained"
          color="success"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
        <span>{count}</span>
        <Button
          variant="contained"
          color="error"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '7ch' }
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="add-mount"
            label="Monto"
            variant="standard"
            value={incrementAmount}
            onChange={e => setIncrementAmount(e.target.value)}
          />
        </Box>
        <Button
          variant="contained"
          color="success"
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Agregar monto
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Agregar asincronico
        </Button>
      </Stack>
    </>
  )
}
