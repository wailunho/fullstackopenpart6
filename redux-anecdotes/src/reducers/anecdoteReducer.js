import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'
import anecdotesService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      return action.payload
    },
    vote (state, action) {
      return state.map(x => x.id === action.payload ? { ...x, votes: x.votes + 1 } : x)
    },
    add (state, action) {
      return [...state, action.payload]
    },
  },
})

export const { vote, add, setAnecdotes } = anecdoteSlice.actions

export const initAnecdotes = () => {
  return async dispatch => {
    const data = await anecdoteService.getAll()
    dispatch(setAnecdotes(data))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newContent = await anecdotesService.createAnecdote(content)
    dispatch(add(newContent))
  }
}

export const updateAnecdote = (id, obj) => {
  return async dispatch => {
    await anecdotesService.updateAnecdote(id, obj)
    dispatch(vote(id))
  }
}

export default anecdoteSlice.reducer