import styled from "styled-components"

export const SectionFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  color: ${(props) => props.textcolor};
  .text {
    font-size: 16px;
    font-weight: 700;
    margin-right: 5px;
  }
  &:hover {
    text-decoration: underline;
  }
`
