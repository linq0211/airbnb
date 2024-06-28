import { getMoreListData } from "@/services/modules/more"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchMoreDataAction = createAsyncThunk("moredata", async (page = 1, { dispatch }) => {
  const offset = (page - 1) * 20
  dispatch(changeCurrentPageAction(page))

  // 获取到数据前加载loading
  dispatch(changeLoadingAction(true))

  // 传入偏移量
  const res = await getMoreListData(offset)

  // 获取到数据后移除loading
  dispatch(changeLoadingAction(false))

  const roomList = res.list
  const totalCount = res.totalCount
  dispatch(changeTotalCountAction(totalCount))
  dispatch(changeRoomListAction(roomList))
})

const moreSlice = createSlice({
  name: "more",
  initialState: {
    currentPage: 1,
    roomList: [],
    totalCount: 0,

    loading: false,
  },
  reducers: {
    changeRoomListAction(state, { payload }) {
      state.roomList = payload
    },
    changeTotalCountAction(state, { payload }) {
      state.totalCount = payload
    },
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload
    },
    changeLoadingAction(state, { payload }) {
      state.loading = payload
    },
  },
})

export const {
  changeRoomListAction,
  changeTotalCountAction,
  changeCurrentPageAction,
  changeLoadingAction,
} = moreSlice.actions
export default moreSlice.reducer
