import styled from "styled-components"

export const HeaderWrapper = styled.div`
  /* position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  top: 90px; */

  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 0 6px 16px;
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;

  .filter {
    display: flex;
    .item {
      border: 1px solid #dce0e0;
      border-radius: 4px;
      padding: 12px 16px;
      margin: 0 4px 0 8px;
      cursor: pointer;
      ${(props) => props.theme.boxShadow}

      &.active {
        border: 1px solid #008489;
        background-color: #008489;
        color: #fff;
      }
    }
  }
`
