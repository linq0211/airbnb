import PropTypes from "prop-types"
import React, { memo } from "react"
import { SectionRoomWrapper } from "./style"
import RoomItem from "../Room-item/RoomItem"

const SectionRooms = memo((props) => {
  const { list = [] } = props

  return (
    <SectionRoomWrapper>
      {list.slice(0, 8).map((item) => {
        return <RoomItem item={item} />
      })}
    </SectionRoomWrapper>
  )
})

SectionRooms.propTypes = {
  list: PropTypes.array,
}

export default SectionRooms
