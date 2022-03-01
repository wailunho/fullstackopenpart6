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
export default notificationSlice.reducer