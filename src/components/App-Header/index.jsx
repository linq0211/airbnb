import React, { memo } from "react"
import HeaderLeft from "./cpns/Header-Left"
import HeaderCenter from "./cpns/Header-Center"
import HeaderRight from "./cpns/Header-Right"
import { HeaderWrapper } from "./style"

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

export default AppHeader
