import styled from "styled-components"

export const LongForItemWrapper = styled.div`
  flex-shrink: 0;
  width: 20%;
  padding: 8px;
  box-sizing: border-box;
  cursor: pointer;
  .inner {
    width: 100%;
    position: relative;
    .cover {
      width: 100%;
    }
    .bg-cover {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 60%;
      background: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%);
    }

    .info {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 24px 30px;
      color: #fff;
      .city {
        font-size: 18px;
        font-weight: 600;
      }
      .price {
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
`
