import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counterSlice' 
// counterReducer 

export const store = configureStore({
  reducer: {counter: counterSlice},
})