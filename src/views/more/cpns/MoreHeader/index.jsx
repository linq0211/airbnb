import React, { memo, useState } from "react"
import { HeaderWrapper } from "./style"
import filterData from "@/assets/data/filter_data.json"
import classNames from "classnames"

const MoreHeader = memo(() => {
  const [selectItem, setSelectItem] = useState([])

  function itemClickHandler(item) {
    // 引用类型修改先拷贝一个新对象，在设置修改值
    const newSelectItem = [...selectItem]
    if (newSelectItem.includes(item)) {
      // 选中时进行 splice 移除
      const itemIndex = newSelectItem.findIndex((value) => (value = item))
      newSelectItem.splice(itemIndex, 1)
    } else {
      // 未选中时进行 push 添加
      newSelectItem.push(item)
    }
    setSelectItem(newSelectItem)
  }

  return (
    <HeaderWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              className={classNames("item", { active: selectItem.includes(item) })}
              key={item}
              onClick={() => itemClickHandler(item)}
            >
              {item}
            </div>
          )
        })}
      </div>
    </HeaderWrapper>
  )
})

export default MoreHeader
