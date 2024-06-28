import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counterSlice' 
// import logger from "redux-logger"
import Logger from './middleware/logger'
// counterReducer 

export const store = configureStore({
  reducer: {counter: counterSlice},
  // devTools:false  when its production
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch