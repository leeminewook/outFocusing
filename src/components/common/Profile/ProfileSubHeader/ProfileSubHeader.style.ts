import styled from "styled-components";
import { colorPalette } from "../../../../styles/ColorPalette";
import { fontPalette } from "../../../../styles/FontPalette";

export const StyledProfileSubHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 70px;
  gap: 10px;
`;

export const StyledProfileSubHeaderItem = styled.div`
  width: 80px;
  height: 100%;
  border-bottom: 1px solid ${colorPalette.lightPurple};
  font-size: ${fontPalette.font18};
  color: ${colorPalette.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  font-weight: 400;
  box-sizing: border-box;
`;
