import React, { memo, useEffect, useRef, useState } from "react"
import { ScrollViewWrapper } from "./style"
import IconArrowLeft from "@/assets/svg/icon-arrow-left"
import IconArrowRight from "@/assets/svg/icon-arrow-right"

// 详细滚动说明 可见 @/assets/dio/scroll.dio
const ScrollView = memo((props) => {
  const [showLeft, setShowLeft] = useState(false) //是否展示左边按钮
  const [showRight, setShowRight] = useState(false) // 是否展示右边按钮

  // const [totalDistance, setTotalDistance] = useState(0) 保存滚动区域和展示区域的差值
  // const [posIndex, setPosIndex] = useState(0) 当前元素在tabs的索引
  /*  
    缺点：使用state保存时，通过set修改值时会重新渲染组件，造成不必要的重新渲染
    优化：使用ref的current属性进行保存，使用 useRef 生成的对象在每次组件重新渲染时都是同一个
  */
  const totalDistanceRef = useRef()
  const posIndexRef = useRef(0)

  const scrollRef = useRef() //获取当前的tabs元素

  // 左右边按钮点击
  // function leftClickHandler() {
  //   const newIndex = posIndex - 1
  //   const newEl = scrollRef.current.children[newIndex]
  //   const newOffsetLeft = newEl.offsetLeft
  //   scrollRef.current.style.transform = `translate(-${newOffsetLeft}px)`

  //   setPosIndex(newIndex)
  //   setShowLeft(newOffsetLeft > 0)
  //   setShowRight(totalDistance > newOffsetLeft)
  // }
  // function rightClickHandler() {
  //   const newIndex = posIndex + 1
  //   const newEl = scrollRef.current.children[newIndex]
  //   const newOffsetLeft = newEl.offsetLeft
  //   scrollRef.current.style.transform = `translate(-${newOffsetLeft}px)`

  //   setPosIndex(newIndex)
  //   setShowLeft(newOffsetLeft > 0)
  //   setShowRight(totalDistance > newOffsetLeft)
  // }
  // 逻辑相似，进行抽取
  function btnClickHandler(isLeft = true) {
    posIndexRef.current = isLeft ? posIndexRef.current - 1 : posIndexRef.current + 1 // 左侧按钮索引-1，右侧按钮索引+1
    const newEl = scrollRef.current.children[posIndexRef.current] // 通过ref值根据新的索引值去获取当前元素
    const newOffsetLeft = newEl.offsetLeft // 获取当前元素的 offsetLeft
    scrollRef.current.style.transform = `translate(-${newOffsetLeft}px)` // 对整个可滚动区域进行偏移

    setShowLeft(newOffsetLeft > 0)
    setShowRight(totalDistanceRef.current > newOffsetLeft)
  }

  // 在组件挂在完成时，重新设置显示按钮的值
  useEffect(() => {
    const clientWidth = scrollRef.current.clientWidth
    const scrollWidth = scrollRef.current.scrollWidth
    const totalDistance = scrollWidth - clientWidth

    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
  }, [])

  return (
    <ScrollViewWrapper>
      {showLeft && (
        <div className="control left" onClick={() => btnClickHandler()}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={() => btnClickHandler(false)}>
          <IconArrowRight />
        </div>
      )}

      <div className="scroll">
        <div className="scroll-content" ref={scrollRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

export default ScrollView
