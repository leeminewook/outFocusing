import styled from "styled-components";

export const StyledProfileRow = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  white-space: nowrap;
  box-sizing: border-box;
  margin-bottom: 160px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const StyledProfileRowTitle = styled.div`
  font-weight: 700;
  font-size: 25px;
  color: #ffffff;
  margin-bottom: 40px;
`;
