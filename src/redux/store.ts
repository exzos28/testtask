// Imports: Dependencies
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// Imports: Redux
import rootReducer from './reducers'


// Redux: Store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

// Exports
export default store
export type RootState = ReturnType<typeof rootReducer>