import React, { memo, useEffect } from "react"
import { HomeWrapper } from "./style"
import HomeBanner from "./cpns/HomeBanner"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchHomeDataAction } from "@/store/modules/home"
import HomeSectionV1 from "./cpns/HomeSectionV1"
import SectionHeader from "@/components/Section-Header"
import SectionRooms from "@/components/Section-rooms"
import HomeSectionV2 from "./cpns/HomeSectionV2"
import { isEmpty } from "@/utils"

const Home = memo(() => {
  const { goodPrice, highScore, discount, hotrecommend, plus } = useSelector(
    (state) => ({
      goodPrice: state.homeReducer.homeGoodPrice,
      highScore: state.homeReducer.homeHighScore,
      discount: state.homeReducer.homeDiscount,
      hotrecommend: state.homeReducer.homeHotRecommend,
      plus: state.homeReducer.homePlus,
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 在成功发送请求并且对象有值后渲染内容，避免二次渲染  */}
        {/* 父组件Home渲染时，传入空对象子组件默认会渲染一次 */}
        {/* 发送请求修改数据后传入的props发送变化，会重新渲染一次 */}

        {!isEmpty(discount) && <HomeSectionV2 data={discount} />}
        {!isEmpty(hotrecommend) && <HomeSectionV2 data={hotrecommend} />}
        {!isEmpty(goodPrice) && <HomeSectionV1 data={goodPrice} />}
        {!isEmpty(highScore) && <HomeSectionV1 data={highScore} />}

        {!isEmpty(plus) && (
          <div className="plus">
            <SectionHeader title={plus.title} subtitle={plus.subtitle} />
            <SectionRooms list={plus.list?.slice(0, 5)} itemWidth="20%" />
          </div>
        )}
      </div>
    </HomeWrapper>
  )
})

export default Home
