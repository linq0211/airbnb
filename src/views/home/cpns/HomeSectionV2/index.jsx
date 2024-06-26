import PropTypes from "prop-types"
import React, { memo, useCallback, useState } from "react"
import { SectionV2Wrapper } from "./style"
import SectionHeader from "@/components/Section-Header"
import SectionTabs from "@/components/Section-tabs"
import SectionRooms from "@/components/Section-rooms"
import SectionFooter from "@/components/Section-Footer"

const HomeSectionV2 = memo((props) => {
  const { data } = props

  // 处理tabs数据 [name, name1, ...]
  const tabs = data.dest_address.map((item) => item.name)

  // 定义state数据，useState只会在组件第一次渲染中调用初始值渲染
  //  父组件Home渲染时，传入空对象子组件默认会渲染一次，这次渲染会通过initialName创建一个初始值并通过useState进行保存
  //  发送请求修改数据后传入的props发送变化，会重新渲染一次，这次渲染改变了初始值，但useState不会重新调用更新name的值
  const initialName = Object.keys(data.dest_list)[0]
  const [name, setName] = useState(initialName)

  // 使用useCallback对传递给子组件的函数进行包裹，避免父组件每次重新渲染时传递 新生成的函数对象 时，子组件也需要重新渲染
  const tabClickHandler = useCallback((name) => {
    setName(name)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={data.title} subtitle={data.subtitle} />
      <SectionTabs tabs={tabs} tabClick={tabClickHandler} />
      <SectionRooms list={data.dest_list[name]} itemWidth="33.333%" />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  data: PropTypes.object,
}

export default HomeSectionV2
