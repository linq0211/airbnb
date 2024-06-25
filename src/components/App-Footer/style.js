import styled from "styled-components"

export const FooterWrapper = styled.div`
  background-color: #f7f7f7;
  border-top: 1px solid #eee;
  margin-top: 60px;
  .content {
    width: 60%;
    margin: 0 auto;
    .top {
      border-bottom: 1px solid #ccc;
      padding: 40px 0 20px;
      display: flex;
      .item {
        display: flex;
        flex-direction: column;
        flex: 1;
        & > span {
          margin-bottom: 8px;
          font-size: 16px;
        }
        & > a {
          margin: 8px 0;
          font-size: 14px;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .bottom {
      font-size: 12px;
      color: #767676;
      padding: 20px 0 40px;
    }
  }
`
