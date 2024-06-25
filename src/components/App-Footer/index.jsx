import React, { memo } from "react"
import { FooterWrapper } from "./style"
import footerData from "@/assets/data/footer.json"

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="content">
        <div className="top">
          {footerData.map((item, index) => {
            return (
              <div className="item" key={index}>
                <span>{item.name}</span>
                {item.list.map((v) => {
                  return (
                    <a href="#" key={v}>
                      {v}
                    </a>
                  )
                })}
              </div>
            )
          })}
        </div>
        <div className="bottom">
          京ICP备16017121号京ICP证 · 160773号京公网安备 · 11010502032345号 ·
          安彼迎网络（北京）有限公司 · 营业执照 · 全国旅游投诉渠道12345 · 违法和不良信息举报邮箱
          jubao@airbnb.com ·
        </div>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter
