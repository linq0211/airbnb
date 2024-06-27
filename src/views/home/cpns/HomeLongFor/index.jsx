import PropTypes from "prop-types"
import React, { memo } from "react"
import { LongForWrapper } from "./style"
import SectionHeader from "@/components/Section-Header"
import ScrollView from "@/base-ui/Scroll-View"
import LongForItem from "@/components/LongFor-item"

const HomeLongFor = memo((props) => {
  const { data } = props

  return (
    <LongForWrapper>
      <SectionHeader title={data.title} subtitle={data.subtitle} />
      <div className="section-content">
        <ScrollView>
          {data.list.map((item) => {
            return <LongForItem item={item} />
          })}
        </ScrollView>
      </div>
    </LongForWrapper>
  )
})

HomeLongFor.propTypes = {
  data: PropTypes.object,
}

export default HomeLongFor
