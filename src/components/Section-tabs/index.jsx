import PropTypes from "prop-types"
import React, { memo, useState } from "react"
import { SectionTabsWrapper } from "./style"
import classNames from "classnames"

const SectionTabs = memo((props) => {
  const { tabs = [], tabClick } = props

  const [currentIndex, setCurrentIndex] = useState(0)

  function changeTabHandler(item, index) {
    setCurrentIndex(index)
    tabClick(item)
  }

  return (
    <SectionTabsWrapper>
      {tabs.map((item, index) => {
        return (
          <div
            key={index}
            className={classNames("item", { active: currentIndex === index })}
            onClick={(e) => changeTabHandler(item, index)}
          >
            {item}
          </div>
        )
      })}
    </SectionTabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabs: PropTypes.array,
  tabClick: PropTypes.func,
}

export default SectionTabs
