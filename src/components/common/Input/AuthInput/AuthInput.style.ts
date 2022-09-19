import styled from "styled-components";
import { fontPalette } from "../../../../styles/FontPalette";
import { colorPalette } from "../../../../styles/ColorPalette";

export const StyledAuthInput = styled.input`
  background: rgba(203, 210, 254, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 11px 17px;
  font-size: 18px;

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 3px #887bec;
    box-sizing: border-box;
  }
`;

export const StyledInputName = styled.div`
  font-size: ${fontPalette.font16};
  color: ${colorPalette.lightGray};
  font-weight: 400;
  margin-bottom: 10px;
`;

export const StyledAuthInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
