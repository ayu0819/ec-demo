import React from 'react'
import Router from './Router'
import "./assets/reset.css"
// ↓ assets からcssを設定
import "./assets/style.css"

const App = () => {
  return(
    <main>
      <Router />
    </main>
  )
}

export default App;