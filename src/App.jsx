import React, { memo } from "react"
import { useRoutes } from "react-router-dom"
import routes from "./router"
import AppHeader from "./components/App-Header"

const App = memo(() => {
  return (
    <div className="app">
      <AppHeader />
      <div className="content">{useRoutes(routes)}</div>
      <div className="footer">footer</div>
    </div>
  )
})

export default App
