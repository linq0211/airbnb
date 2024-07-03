import React, { memo, useState } from "react"
import { DemoWrapper } from "./style"
import Indicator from "@/base-ui/Indicator"

const Demo = memo(() => {
  const [selectIndex, setSelectIndex] = useState(0)

  const names = ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg", "hhh"]
  const changeNameHandler = (isNext) => {
    let nextIndex = isNext ? selectIndex + 1 : selectIndex - 1
    if (nextIndex < 0) nextIndex = names.length - 1
    if (nextIndex > names.length - 1) nextIndex = 0
    setSelectIndex(nextIndex)
  }

  return (
    <DemoWrapper>
      <button className="btn" onClick={() => changeNameHandler(true)}>
        下一个
      </button>
      <button className="btn" onClick={() => changeNameHandler(false)}>
        上一个
      </button>
      <div className="list">
        <Indicator index={selectIndex}>
          {names.map((item, index) => {
            return <button key={item}>{item}</button>
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

export default Demo
