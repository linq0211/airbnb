import { configureStore } from "@reduxjs/toolkit"
import homeReducer from "./modules/home"
import detailReducer from "./modules/detail"
import moreReducer from "./modules/more"

const store = configureStore({
  reducer: {
    homeReducer,
    detailReducer,
    moreReducer,
  },
})

export default store
