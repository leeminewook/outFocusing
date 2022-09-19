import styled from "styled-components";
import { colorPalette } from "../../../../styles/ColorPalette";
import { fontPalette } from "../../../../styles/FontPalette";

export const StyledSearchProfile = styled.div`
  width: 100%;
  height: 110px;
  padding-bottom: 15px;
  padding-top: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
`;

export const StyledSearchProfileTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const StyledSearchProfileImg = styled.div`
  width: 80px;
  height: 80px;
  box-sizing: border-box;

  & > img {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
`;
export const StyledSearchProfileText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSearchProfileTextName = styled.div`
  font-size: ${fontPalette.font18};
  font-weight: 400;
  color: ${colorPalette.white};
  padding-bottom: 8px;
`;

export const StyledSearchProfileTextIntroduce = styled.div`
  font-size: ${fontPalette.font14};
  font-weight: 400;
  color: ${colorPalette.lightGray};
  padding-bottom: 3px;
`;

export const StyledSearchProfileTextArea = styled.div`
  font-size: ${fontPalette.font14};
  font-weight: 400;
  color: ${colorPalette.lightGray};
`;

export const StyledSearchProfileSub = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSearchProfileBtn = styled.div`
  background-color: rgba(203, 210, 254, 0.03);
  color: ${colorPalette.white};
  width: 165px;
  height: 36px;
  border-radius: 5px;
  font-size: ${fontPalette.font16};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;
