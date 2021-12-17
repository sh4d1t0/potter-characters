import React from 'react'
import { Router } from 'react-router-dom'
import '@testing-library/jest-dom'
import { render, screen } from './test-utils'
import { createMemoryHistory } from 'history'
import App, { LocationDisplay } from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Staff/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders logo', () => {
  render(<App />)
  const linkElement = screen.getByAltText(/HarryPotterLogo/i)
  expect(linkElement).toBeInTheDocument()
})

test('rendering a component that uses useLocation', async () => {
  const history = createMemoryHistory()
  const route = '/staff'
  history.push(route)
  render(
    <Router history={history}>
      <LocationDisplay />
    </Router>
  )

  await expect(screen.getByText('Harry')).toHaveTextContent(route)
})
