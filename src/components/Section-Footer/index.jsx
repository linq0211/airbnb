import PropTypes from "prop-types"
import React, { memo } from "react"
import { SectionFooterWrapper } from "./style"
import IconArrowRight from "@/assets/svg/icon-arrow-right"

const SectionFooter = memo((props) => {
  const { name } = props

  let showText = "查看全部"
  if (name) showText = `查看更多${name}房源`

  return (
    <SectionFooterWrapper textcolor={name ? "#00848a" : "#000"}>
      <div className="text">{showText}</div>
      <IconArrowRight />
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string,
}

export default SectionFooter
