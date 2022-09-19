import styled from "styled-components";
import { colorPalette } from "../../../../styles/ColorPalette";
import { fontPalette } from "../../../../styles/FontPalette";

export const StyledFollowingBtn = styled.div`
  font-size: ${fontPalette.font16};
  color: ${colorPalette.white};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 256px;
  height: 32px;
  /* background-color: ${colorPalette.lightPurple}; */
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

export const StyledFollowingBtnCover = styled.div`
  background-color: ${colorPalette.black};
  /* opacity: 0.5; */
  width: 256px;
  height: 32px;
  border-radius: 5px;
  position: absolute;
`;
