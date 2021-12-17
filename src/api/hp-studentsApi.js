import axios from 'axios'

const baseUrl = 'http://localhost:5000/students'

export default axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-type': 'application/json'
  }
})
