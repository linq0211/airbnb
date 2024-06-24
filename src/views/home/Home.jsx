import React, { memo, useEffect, useState } from "react"
import myRequest from "@/services"

const Home = memo(() => {
  const [highScore, setHighScore] = useState({})

  // 模拟网络请求
  useEffect(() => {
    myRequest
      .get({
        url: "/home/highscore",
      })
      .then((res) => {
        setHighScore(res)
      })
  }, [])

  return (
    <div>
      <h1>{highScore.title}</h1>
      <h3>{highScore.subtitle}</h3>
      <ul>
        {highScore.list?.map((item) => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
})

export default Home
