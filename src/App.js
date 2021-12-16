import React, { Fragment } from 'react'
import { Routes, Route, Link as RouterLink } from 'react-router-dom'
import { Counter } from './features/counter/Counter'
import {
  CssBaseline,
  Container,
  Divider,
  Link,
  Stack,
  Typography
} from '@mui/material'
import Home from './components/Home/Home'
import logo from './logo.svg'
import './App.scss'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="test" element={<Test />} />
        </Routes>
      </Container>
    </React.Fragment>
  )
}

function Test() {
  return (
    <>
      <main>
        <nav>
          <Link component={RouterLink} to="/about">
            About
          </Link>
        </nav>
        <Typography variant="h4">Welcome to the homepage!</Typography>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Typography gutterBottom variant="body1" component="div">
          Edit <code>src/App.js</code> and save to reload.
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
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
