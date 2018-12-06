import React, { Component } from 'react'
import Auth from './Auth'

class App extends Component {
  render() {
    return (
      <Auth>
        <div>
          SUPER SECRET CONTENT!
        </div>
      </Auth>
    )
  }
}

export default App
