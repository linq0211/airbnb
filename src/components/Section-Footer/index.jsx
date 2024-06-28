import PropTypes from "prop-types"
import React, { memo } from "react"
import { SectionFooterWrapper } from "./style"
import IconArrowRight from "@/assets/svg/icon-arrow-right"
import { useNavigate } from "react-router-dom"

const SectionFooter = memo((props) => {
  const { name } = props

  let showText = "查看全部"
  if (name) showText = `查看更多${name}房源`

  // 路由跳转
  const navigate = useNavigate()
  function moreClickHandler() {
    navigate("/more")
  }

  return (
    <SectionFooterWrapper textcolor={name ? "#00848a" : "#000"}>
      <div className="text" onClick={moreClickHandler}>
        {showText}
      </div>
      <IconArrowRight />
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string,
}

export default SectionFooter
