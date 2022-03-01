import { add } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { changeNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (e) => {
    e.preventDefault()
    const content = e.target.content.value
    dispatch(add(content))
    dispatch(changeNotification(`you created '${content}'`))
    setTimeout(() => dispatch(removeNotification()), 5000)
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