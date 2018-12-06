import React, { Component } from 'react'
import Auth from './Auth'
import UserData from './UserData'

class App extends Component {
  render() {
    return (
      <Auth>
        <UserData />
      </Auth>
    )
  }
}

export default App
