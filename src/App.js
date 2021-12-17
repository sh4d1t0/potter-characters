import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Home from './components/Home/Home'
import Staff from './components/character/CharacterStaffList'
import Students from './components/character/CharacterStudentsList'
import './App.scss'

function App() {
  return (
    <React.Fragment>
      <Container fixed className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="staff" element={<Staff />} />
          <Route path="students" element={<Students />} />
        </Routes>
      </Container>
    </React.Fragment>
  )
}

export default App
