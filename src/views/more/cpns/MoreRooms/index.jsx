import React, { memo } from "react"
import { RoomsWrapper } from "./style"
import { shallowEqual, useSelector } from "react-redux"
import RoomItem from "@/components/Room-item/RoomItem"

const MoreRooms = memo(() => {
  const { roomList, totalCount, loading } = useSelector(
    (state) => ({
      roomList: state.moreReducer.roomList,
      totalCount: state.moreReducer.totalCount,
      loading: state.moreReducer.loading,
    }),
    shallowEqual
  )

  return (
    <RoomsWrapper>
      <div className="title">共{totalCount}多处房源</div>
      <div className="list">
        {roomList.map((item) => {
          return <RoomItem item={item} itemWidth="20%" key={item._id} />
        })}
      </div>
      {loading && <div className="cover"></div>}
    </RoomsWrapper>
  )
})

export default MoreRooms
