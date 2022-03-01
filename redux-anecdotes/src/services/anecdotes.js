import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const getAll = async () => {
  const res = await axios(baseUrl)
  return res.data
}

const createAnecdote = async (content) => {
  const res = await axios.post(baseUrl, {id: getId(), content, votes: 0})
  return res.data
}

const updateAnecdote = async (id, obj) => {
  const res = await axios.put(`${baseUrl}/${id}`, obj)
  return res.data
}

export default {
  getAll,
  createAnecdote,
  updateAnecdote,
}