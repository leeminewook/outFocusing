import styled from "styled-components";
import { colorPalette } from "../../../../styles/ColorPalette";
import { fontPalette } from "../../../../styles/FontPalette";

export const StyledMainProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 242px;
  height: 383px;
  box-sizing: border-box;
  padding: 25px 45px;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 15px;
  margin-right: 58px;
  :hover {
    background-color: ${colorPalette.lightBlack};
  }
  & > img {
    width: 160px;
    height: 160px;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
`;

export const StyledMainProfileName = styled.div`
  font-size: ${fontPalette.font24};
  color: ${colorPalette.white};
  font-weight: 700;
  text-align: center;
`;

export const StyledMainProfileLiveArea = styled.div`
  font-size: ${fontPalette.font20};
  color: ${colorPalette.lightGray};
  font-weight: 400;
  text-align: center;
`;
