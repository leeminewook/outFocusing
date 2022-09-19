import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  padding: 18px 80px;
  background: #101010;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;

export const StyledHeaderLogo = styled.div`
  width: 210px;
  height: 36px;
  box-sizing: border-box;
  & > img {
    width: 36px;
    height: 100%;
    box-sizing: border-box;
  }
`;

export const StyledHeaderSubIcons = styled.div`
  display: flex;
  height: 44px;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledHeaderIconBell = styled.div`
  width: 26px;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  margin-right: 40px;
  & > img {
    width: 100%;
    height: 31px;
    box-sizing: border-box;
  }
`;

export const StyledHeaderIconChat = styled.div`
  width: 27px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  margin-right: 40px;
  align-items: center;
  & > img {
    width: 100%;
    height: 31px;
    box-sizing: border-box;
  }
`;
export const StyledHeaderIconProfile = styled.div`
  width: 44px;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  margin-right: 13px;
  & > img {
    width: 100%;
    height: 44px;
    box-sizing: border-box;
  }
`;
export const StyledHeaderIconAddView = styled.div`
  display: flex;
  width: 20px;
  height: 100%;
  box-sizing: border-box;
  align-items: center;
  & > img {
    width: 100%;
    height: 10px;
    box-sizing: border-box;
  }
`;
