import React, { memo } from "react"
import PropTypes from "prop-types"
import { LongForItemWrapper } from "./style"

const LongForItem = memo((props) => {
  const { item } = props
  return (
    <LongForItemWrapper>
      <div className="inner">
        <img src={item.picture_url} alt="" className="cover" />
        <div className="bg-cover"></div>
        <div className="info">
          <div className="city">{item.city}</div>
          <div className="price">均价 {item.price}</div>
        </div>
      </div>
    </LongForItemWrapper>
  )
})
LongForItem.propTypes = {
  item: PropTypes.object,
}

export default LongForItem
