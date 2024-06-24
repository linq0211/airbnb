import styled from "styled-components"

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .btns {
    display: flex;
    color: ${(props) => props.theme.text.primaryColor};
    font-weight: 600;

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 20px;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 24px;
    margin-right: 24px;
    cursor: pointer;
    position: relative;

    /* 阴影动画抽取 */
    ${(props) => props.theme.boxShadow}

    .dot {
      position: absolute;
      top: 5px;
      right: 9px;
      background-color: ${(props) => props.theme.color.primaryColor};
      /* font-size: 36px; */
      z-index: 9;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 1px solid #fff;
    }
    .panel {
      position: absolute;
      top: 48px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

      .top {
        border-bottom: 1px solid #ccc;
      }
      .top,
      .bottom {
        padding: 10px 0;
        .item {
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          padding: 0 14px;
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
    }
  }
`
