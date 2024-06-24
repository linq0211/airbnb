import styled from "styled-components"

export const CenterWrapper = styled.div`
  .search-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 45px;
    border: 1px solid #ccc;
    border-radius: 24px;
    padding: 0 10px;
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);

    ${(props) => props.theme.boxShadow}

    .text {
      color: ${(props) => props.theme.text.secondaryColor};
      font-weight: 600;
      padding: 0 10px;
      font-size: 14px;
    }
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      width: 32px;
      height: 32px;
      background-color: ${(props) => props.theme.color.primaryColor};
      border-radius: 50%;
    }
  }
`
