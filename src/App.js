import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './reducer/configureStore'
import TableContainer from './containers/TableContainer'
import SearchContainer from './containers/SearchContainer'
import Header from './components/Header'

import './App.css'

const store = configureStore()

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Header />
        <SearchContainer />
        <TableContainer />
      </Provider>
    )
  }
}

export default App
