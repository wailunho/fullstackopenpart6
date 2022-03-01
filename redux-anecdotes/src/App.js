import { useSelector, useDispatch } from 'react-redux'
import { vote, add } from './reducers/anecdoteReducer'
import { useState } from 'react'

const App = () => {
  const [content, setContent] = useState('')
  const anecdotes = useSelector(state => state.sort((a, b) => b.votes - a.votes))
  const dispatch = useDispatch()

  const voteAnecdote = (id) => {
    dispatch(vote(id))
  }

  const addAnecdote = (e) => {
    e.preventDefault()
    dispatch(add(content))
    setContent('')
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteAnecdote(anecdote.id)}>vote</button>
          </div>
        </div>,
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="content" onChange={(e) => setContent(e.target.value)} value={content}/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App