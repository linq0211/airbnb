import PropTypes from "prop-types"
import React, { memo } from "react"
import { SectionV3Wrapper } from "./style"
import SectionHeader from "@/components/Section-Header"
import ScrollView from "@/base-ui/Scroll-View"
import RoomItem from "@/components/Room-item/RoomItem"

const HomeSectionV3 = memo((props) => {
  const { data } = props

  return (
    <SectionV3Wrapper>
      <SectionHeader title={data.title} subtitle={data.subtitle} />
      <div className="section-content">
        <ScrollView>
          {data.list.map((item) => {
            return <RoomItem item={item} itemWidth="20%" key={item.id} />
          })}
        </ScrollView>
      </div>
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  data: PropTypes.object,
}

export default HomeSectionV3
