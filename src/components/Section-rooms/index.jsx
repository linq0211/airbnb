import PropTypes from "prop-types"
import React, { memo } from "react"
import { SectionRoomWrapper } from "./style"
import RoomItem from "../Room-item/RoomItem"

const SectionRooms = memo((props) => {
  const { list = [], itemWidth } = props

  return (
    <SectionRoomWrapper>
      {list.slice(0, 8).map((item) => {
        return <RoomItem item={item} itemWidth={itemWidth} key={item.id} />
      })}
    </SectionRoomWrapper>
  )
})

SectionRooms.propTypes = {
  list: PropTypes.array,
  itemWidth: PropTypes.string,
}

export default SectionRooms
