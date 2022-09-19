import styled from "styled-components";

import { colorPalette } from "../../../styles/ColorPalette";
import { fontPalette } from "../../../styles/FontPalette";

export const StlyedAlbum = styled.div`
  border-radius: 15px;
  box-sizing: border-box;
  margin-right: 60px;
  margin-bottom: 100px;
  width: 350px;
  height: 453px;
  display: flex;
  flex-direction: column;
  & > img {
    width: 350px;
    height: 350px;
    box-sizing: border-box;
    border-radius: 15px;
  }
`;

export const StyledAlbumText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  height: 22%;
  padding-top: 40px;
`;
export const StyledAlbumTitle = styled.div`
  font-size: ${fontPalette.font20};
  color: ${colorPalette.white};
  font-weight: 400;
`;
export const StyledAlbumSubTitle = styled.div`
  font-size: ${fontPalette.font16};
  color: ${colorPalette.lightGray};
  font-weight: 400;
`;
