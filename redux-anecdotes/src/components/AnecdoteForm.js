import { createAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (e) => {
    e.preventDefault()
    const content = e.target.content.value
    dispatch(createAnecdote(content))
    dispatch(setNotification(`you created '${content}'`, 5000))
    e.target.reset()
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="content" /></div>
        <button type="submit">create</button>
      </form>
    </>
  )
}

export default AnecdoteForm