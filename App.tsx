import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import store from '~/redux/store'

import AppContainer from '~/navigation/AppContainer'

const App = () => {
  return (
    <ReduxProvider store={store}>
      <AppContainer />
    </ReduxProvider>
  )
}

export default App
