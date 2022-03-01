import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    changeNotification (state, action) {
      return action.payload
    },
    removeNotification () {
      return ''
    }
  },
})

export const { changeNotification, removeNotification } = notificationSlice.actions

export const setNotification = (msg, timeout) => {
  return async dispatch => {
    dispatch(changeNotification(msg))
    setTimeout(() => dispatch(removeNotification()), timeout)
  }
}
export default notificationSlice.reducer