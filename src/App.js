import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Home from './components/Home/Home'
import Staff from './components/character/CharacterStaffList'
import Students from './components/character/CharacterStudentsList'
import './App.scss'

function App() {
  return (
    <Container fixed className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="staff" element={<Staff />} />
          <Route path="students" element={<Students />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
