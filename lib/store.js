import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/lib/features/user/userInfo'

export const store = configureStore({
  reducer: {
    userInformation: counterReducer,
  },
})
