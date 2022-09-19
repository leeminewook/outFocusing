import styled from "styled-components";

export const StyledSearchContainer = styled.div`
  box-sizing: border-box;
  background: rgba(203, 210, 254, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 560px;
  height: 44px;
  display: flex;
  align-items: center;
  justfiy-content: space-between;
`;

export const StyledSearchInput = styled.input`
  height: 100%;
  width: 90%;
  box-sizing: border-box;
  outline: none;
  color: #c4c4c4;
  font-weight: 400;
  font-size: 18px;
  padding: 12px 14px;
  background: none;
  border: none;
`;

export const StyledSearchImg = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  align-items: center;
  justfiy-content: center;
  margin-left: 15px;
  & > img {
    width: 25px;
    height: 25px;
  }
`;
