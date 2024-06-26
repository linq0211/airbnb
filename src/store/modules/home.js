import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotRecommendData,
  getHomePlusData,
} from "@/services/modules/home"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchHomeDataAction = createAsyncThunk("homeGoodPrice", (payload, { dispatch }) => {
  getHomeGoodPriceData().then((res) => {
    dispatch(changeGoodPriceAction(res))
  })

  getHomeHighScoreData().then((res) => {
    dispatch(changeHighScoreAction(res))
  })
  getHomeDiscountData().then((res) => {
    dispatch(changeDiscountAction(res))
  })
  getHomeHotRecommendData().then((res) => {
    dispatch(changeHotrecommendAction(res))
  })
  getHomePlusData().then((res) => {
    dispatch(changePlusAction(res))
  })
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    homeGoodPrice: {},
    homeHighScore: {},
    homeDiscount: {},
    homeHotRecommend: {},
    homePlus: {},
  },
  reducers: {
    changeGoodPriceAction(state, { payload }) {
      state.homeGoodPrice = payload
    },
    changeHighScoreAction(state, { payload }) {
      state.homeHighScore = payload
    },
    changeDiscountAction(state, { payload }) {
      state.homeDiscount = payload
    },
    changeHotrecommendAction(state, { payload }) {
      state.homeHotRecommend = payload
    },
    changePlusAction(state, { payload }) {
      state.homePlus = payload
    },
  },
  // extraReducers(builder) {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
  //     state.homeGoodPrice = payload
  //   })
  // },
})

export const {
  changeGoodPriceAction,
  changeHighScoreAction,
  changeDiscountAction,
  changeHotrecommendAction,
  changePlusAction,
} = homeSlice.actions
export default homeSlice.reducer
