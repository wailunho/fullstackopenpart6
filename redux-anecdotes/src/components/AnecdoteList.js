import { vote } from '../reducers/anecdoteReducer'
import { changeNotification, removeNotification } from '../reducers/notificationReducer'
import { useDispatch, useSelector } from 'react-redux'

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return [...anecdotes]
      .sort((a, b) => b.votes - a.votes)
      .filter(x => x.content.includes(filter))
  })
  const dispatch = useDispatch()

  const voteAnecdote = (anecdote) => {
    dispatch(vote(anecdote.id))
    dispatch(changeNotification(`you voted '${anecdote.content}'`))
    setTimeout(() => dispatch(removeNotification()), 5000)
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