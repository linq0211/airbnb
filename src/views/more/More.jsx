import React, { memo } from "react"
import { MoreWrapper } from "."
import MoreHeader from "./cpns/MoreHeader"
import MoreRooms from "./cpns/MoreRooms"
import MorePaination from "./cpns/MorePagination"
import { useDispatch } from "react-redux"
import { fetchMoreDataAction } from "@/store/modules/more"

const More = memo(() => {
  const dispatch = useDispatch()
  dispatch(fetchMoreDataAction())

  return (
    <MoreWrapper>
      <MoreHeader />
      <MoreRooms />
      <MorePaination />
    </MoreWrapper>
  )
})

export default More
