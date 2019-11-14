import { createStore } from 'redux'
import throttle from 'lodash/throttle'

import rootReducer from './modules/root-reducer'
import { loadState, saveState } from 'utils/local-storage'

const persistedState = loadState()

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(
  throttle(() => {
    saveState(store.getState())
  }, 1000)
)

export default store
