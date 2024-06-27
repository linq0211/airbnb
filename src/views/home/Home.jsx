import React, { memo, useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"

import { isEmpty } from "@/utils"
import { fetchHomeDataAction } from "@/store/modules/home"
import { HomeWrapper } from "./style"
import HomeBanner from "./cpns/HomeBanner"
import HomeSectionV1 from "./cpns/HomeSectionV1"
import HomeSectionV2 from "./cpns/HomeSectionV2"
import HomeSectionV3 from "./cpns/HomeSectionV3"
import HomeLongFor from "./cpns/HomeLongFor"

const Home = memo(() => {
  const { goodPrice, highScore, discount, hotRecommend, longFor, plus } = useSelector(
    (state) => ({
      goodPrice: state.homeReducer.homeGoodPrice,
      highScore: state.homeReducer.homeHighScore,
      discount: state.homeReducer.homeDiscount,
      hotRecommend: state.homeReducer.homeHotRecommend,
      longFor: state.homeReducer.homeLongFor,
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
        {!isEmpty(hotRecommend) && <HomeSectionV2 data={hotRecommend} />}
        {!isEmpty(longFor) && <HomeLongFor data={longFor} />}
        {!isEmpty(goodPrice) && <HomeSectionV1 data={goodPrice} />}
        {!isEmpty(highScore) && <HomeSectionV1 data={highScore} />}
        {!isEmpty(plus) && <HomeSectionV3 data={plus} />}
      </div>
    </HomeWrapper>
  )
})

export default Home
