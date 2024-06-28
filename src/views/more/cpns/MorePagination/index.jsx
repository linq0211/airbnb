import React, { memo } from "react"
import { PaginationWrapper } from "./style"
import { Pagination } from "@mui/material"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchMoreDataAction } from "@/store/modules/more"

const MorePaination = memo(() => {
  const { currentPage, totalCount } = useSelector(
    (state) => ({
      currentPage: state.moreReducer.currentPage,
      totalCount: state.moreReducer.totalCount,
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  const totalPage = Math.ceil(totalCount / 20) // 总页数 -> 总条数 / 每页条数，向上取整
  // 第一页：1~20、第二页：21~40... currentPage从0开始
  const start = (currentPage - 1) * 20 + 1
  const end = currentPage * 20

  function pageChangeHandler(event, page) {
    // 回到顶部
    window.scrollTo(0, 0)

    // 页码发生变化时，根据新页码重新请求数据
    dispatch(fetchMoreDataAction(page))
  }

  return (
    <PaginationWrapper>
      <Pagination count={totalPage} size="large" color="primary" onChange={pageChangeHandler} />
      <div className="info">
        第 {start} – {end} 个房源，共超过 {totalCount} 个
      </div>
    </PaginationWrapper>
  )
})

export default MorePaination
