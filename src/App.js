import React, { Fragment } from 'react'
import { Routes, Route, Link as RouterLink } from 'react-router-dom'
import { Counter } from './features/counter/Counter'
import { Box, Divider, Link, Stack } from '@mui/material'
import logo from './logo.svg'
import './App.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            typography: 'body1',
            '& > :not(style) + :not(style)': {
              ml: 2
            }
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </Box>
      </header>
    </div>
  )
}

function Home() {
  return (
    <>
      <main>
        <nav>
          <Link component={RouterLink} to="/about">
            About
          </Link>
        </nav>
        <h2>Welcome to the homepage!</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Link href="https://reactjs.org" underline="hover" target="_blank">
            {'Aprender React'}
          </Link>
          <Link href="https://redux.js.org/" underline="hover" target="_blank">
            {'Redux'}
          </Link>
          <Link
            href="https://redux-toolkit.js.org/"
            underline="hover"
            target="_blank"
          >
            {'Redux Toolkit'}
          </Link>
          <Link
            href="https://react-redux.js.org/"
            underline="hover"
            target="_blank"
          >
            {'React Redux'}
          </Link>
        </Stack>
      </main>
    </>
  )
}

function About() {
  return (
    <>
      <main>
        <nav>
          <Link component={RouterLink} to="/">
            Home
          </Link>
        </nav>
        <h2>Quienes Somos?</h2>
        <p>Se siente como una pregunta existencial, ¿No lo crees?</p>
      </main>
    </>
  )
}

export default App
