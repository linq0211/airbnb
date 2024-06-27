import styled from "styled-components"

export const SectionTabsWrapper = styled.div`
  .item {
    flex-basis: 200px;
    box-sizing: border-box;
    flex-shrink: 0;
    padding: 14px 16px;
    border: 1px solid #d8d8d8;
    border-radius: 3px;
    margin-right: 16px;
    white-space: nowrap;
    text-align: center;
    cursor: pointer;
    ${(props) => props.theme.boxShadow}

    &:last-child {
      margin-right: 0;
    }
  }

  .active {
    color: #fff;
    background-color: ${(props) => props.theme.color.secondaryColor};
  }
`
