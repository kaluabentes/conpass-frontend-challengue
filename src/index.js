import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'styles/base.css'
import App from 'core/app'
import * as serviceWorker from 'utils/service-worker'
import store from 'store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

if (process.env.NODE_ENV === 'production') {
  serviceWorker.register()
} else {
  serviceWorker.unregister()
}
