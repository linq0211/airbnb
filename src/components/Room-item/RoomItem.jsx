import PropTypes from "prop-types"
import React, { memo } from "react"
import { ItemWrapper } from "./style"
import { Rating } from "@mui/material"

const RoomItem = memo((props) => {
  const { item, itemWidth = "25%" } = props

  return (
    <ItemWrapper desccolor={item.verify_info?.text_color} itemwidth={itemWidth}>
      <div className="inner">
        <div className="cover">
          <img className="image" src={item.picture_url} alt="" />
        </div>
        <div className="desc">{item.verify_info?.messages?.join(" · ")}</div>
        <div className="name">{item.name}</div>
        <div className="price">￥{item.price}/晚</div>
        <div className="bottom">
          <Rating
            name="half-rating"
            value={item.star_rating}
            precision={0.5}
            sx={{ color: item.star_rating_color, fontSize: "12px" }}
            readOnly
          />
          <div className="count">{item.reviews_count}</div>
          {item.bottom_info && <div className="info"> · {item.bottom_info.content}</div>}
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  item: PropTypes.object,
  itemWidth: PropTypes.string,
}

export default RoomItem
