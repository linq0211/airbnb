import React, { memo } from "react"
import { useRoutes } from "react-router-dom"
import routes from "./router"
import AppHeader from "./components/App-Header"
import AppFooter from "./components/App-Footer"

const App = memo(() => {
  return (
    <div className="app">
      <AppHeader />
      <div className="content">{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  )
})

export default App
