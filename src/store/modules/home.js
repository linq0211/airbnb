import { getHomeGoodPriceData } from "@/services/modules/home"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchHomeGoodPriceAction = createAsyncThunk("homeGoodPrice", async () => {
  const res = await getHomeGoodPriceData()
  return res
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    homeGoodPrice: {},
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchHomeGoodPriceAction.fulfilled, (state, { payload }) => {
      state.homeGoodPrice = payload
    })
  },
})

// export const {} = homeSlice.actions
export default homeSlice.reducer
