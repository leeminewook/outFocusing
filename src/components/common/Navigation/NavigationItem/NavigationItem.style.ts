import styled from "styled-components";
import { colorPalette } from "../../../../styles/ColorPalette";
import { fontPalette } from "../../../../styles/FontPalette";

export const StyledNavigationItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledNavigationTitle = styled.div`
  font-size: ${fontPalette.font18};
  font-weight: 400;
  color: ${colorPalette.white};
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const StyledNavigationContent = styled.div`
  width: 100%;
  height: 70px;
  font-size: ${fontPalette.font18};
  font-weight: 700;
  color: ${colorPalette.lightPurple};
  display: flex;
  align-items: center;
`;
