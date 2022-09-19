import styled from "styled-components";
import { fontPalette } from "../../styles/FontPalette";
import { colorPalette } from "../../styles/ColorPalette";

export const StyledText = styled.div`
  font-size: ${fontPalette.font14};
  color: ${colorPalette.lightGray};
  font-weight: 400;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const StyledLoginSubtitle = styled.div`
  font-size: ${fontPalette.font16};
  color: ${colorPalette.lightGray};
  font-weight: 700;
  margin-right: 15px;
`;

export const StyledRegisterBtn = styled.div`
  font-size: ${fontPalette.font16};
  color: ${colorPalette.lightPurple};
  font-weight: 700;
`;

export const StyledLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLoginSubContainer = styled.div`
  display: flex;
`;
