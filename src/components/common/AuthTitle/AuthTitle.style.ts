import styled from "styled-components";

import { fontPalette } from "../../../styles/FontPalette";
import { colorPalette } from "../../../styles/ColorPalette";

export const StyledAuthTitle = styled.div`
  font-size: ${fontPalette.font16};
  color: ${colorPalette.white};
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 17px;
`;

export const StyledAuthTitleContainer = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    width: 60px;
    height: 60px;
  }
`;
