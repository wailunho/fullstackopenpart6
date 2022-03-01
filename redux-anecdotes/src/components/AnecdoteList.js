import { updateAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch, useSelector } from 'react-redux'

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return [...anecdotes]
      .sort((a, b) => b.votes - a.votes)
      .filter(x => x.content.includes(filter))
  })
  const dispatch = useDispatch()

  const voteAnecdote = (anecdote) => {
    dispatch(updateAnecdote(anecdote.id, {...anecdote, votes: anecdote.votes + 1}))
    dispatch(setNotification(`you voted '${anecdote.content}'`, 5000))
  }

  return (
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteAnecdote(anecdote)}>vote</button>
          </div>
        </div>,
      )}
    </>
  )
}

export default AnecdoteList