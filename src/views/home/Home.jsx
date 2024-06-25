import React, { memo, useEffect } from "react"
import { HomeWrapper } from "./style"
import HomeBanner from "./cpns/HomeBanner"
import { useDispatch, useSelector } from "react-redux"
import { fetchHomeGoodPriceAction } from "@/store/modules/home"
import SectionHeader from "@/components/Section-Header"
import SectionRooms from "@/components/Section-rooms"

const Home = memo(() => {
  const { goodPrice } = useSelector((state) => ({
    goodPrice: state.homeReducer.homeGoodPrice,
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomeGoodPriceAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="goodprice">
          <SectionHeader title={goodPrice.title} />
          <SectionRooms list={goodPrice.list} />
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
