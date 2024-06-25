import styled from "styled-components"

export const ItemWrapper = styled.div`
  width: 25%;
  box-sizing: border-box;
  padding: 8px;
  .inner {
    width: 100%;
    .cover {
      position: relative;
      padding: 66.67% 0 0;
      border-radius: 3px;
      overflow: hidden;

      .image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .desc {
      font-size: 12px;
      margin: 10px 0 5px;
      color: ${(props) => props.descColor};
    }
    .name {
      height: 36px;
      font-size: 16px;
      font-weight: 700;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .price {
      margin: 8px 0 4px;
    }

    .bottom {
      display: flex;
      align-items: center;
      color: #767676;
      font-weight: 700;
      font-size: 12px;
      .MuiRating-decimal {
        margin-right: -2px;
      }
      .count {
        margin-left: 2px;
      }
    }
  }
`
