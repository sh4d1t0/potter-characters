import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        color="success"
        onClick={() => dispatch(increment())}
      >
        Incrementar
      </Button>
      <span>{count}</span>
      <Button
        variant="contained"
        color="error"
        onClick={() => dispatch(decrement())}
      >
        Decrementar
      </Button>
    </Stack>
  )
}
