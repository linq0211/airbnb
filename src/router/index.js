import React from "react"
import { Navigate } from "react-router-dom"

const Home = React.lazy(() => import("@/views/home/Home"))
const Detail = React.lazy(() => import("@/views/detail/Detail"))
const More = React.lazy(() => import("@/views/more/More"))

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/more",
    element: <More />,
  },
]

export default routes
