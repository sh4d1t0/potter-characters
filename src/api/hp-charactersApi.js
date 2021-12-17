import axios from 'axios'

const baseUrl = 'http://localhost:5000/characters'

export default axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-type': 'application/json'
  }
})
