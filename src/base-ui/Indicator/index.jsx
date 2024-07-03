import PropTypes from "prop-types"
import React, { memo, useEffect, useRef } from "react"
import { IndicatorWrapper } from "./style"

const Indicator = memo((props) => {
  const { index } = props

  const contentRef = useRef()

  useEffect(() => {
    const selectEl = contentRef.current.children[index] // 获取当前元素
    const offsetLeft = selectEl.offsetLeft // 当前元素距左侧的偏移量
    const selectWidth = selectEl.clientWidth // 当前元素的宽度

    const contentWidth = contentRef.current.clientWidth // 展示区域的宽度
    const contentScroll = contentRef.current.scrollWidth // 展示区域的滚动宽度

    // 根据上述计算应该偏移的具体值，并进行两端限制
    let distance = offsetLeft + 0.5 * selectWidth - 0.5 * contentWidth
    if (distance < 0) distance = 0
    if (distance > contentScroll - contentWidth) distance = contentScroll - contentWidth

    // 进行偏移
    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [index])

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  index: PropTypes.number,
}

export default Indicator
