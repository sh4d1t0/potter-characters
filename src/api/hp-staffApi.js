import axios from 'axios'

const baseUrl = 'http://localhost:5000/staff'

export default axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-type': 'application/json'
  }
})
