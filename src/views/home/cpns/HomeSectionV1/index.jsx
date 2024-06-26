import SectionHeader from "@/components/Section-Header"
import SectionRooms from "@/components/Section-rooms"
import PropTypes from "prop-types"
import React, { memo } from "react"
import { SectionV1Wrapper } from "./style"

const HomeSectionV1 = memo((props) => {
  const { data } = props

  return (
    <SectionV1Wrapper>
      <SectionHeader title={data.title} subtitle={data.subtitle} />
      <SectionRooms list={data.list} />
    </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  data: PropTypes.object,
}

export default HomeSectionV1
