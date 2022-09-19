import styled from "styled-components";
import { colorPalette } from "../../styles/ColorPalette";
import { fontPalette } from "../../styles/FontPalette";

export const StyledSearch = styled.div`
  display: flex;
  margin-top: 70px;
  gap: 70px;
`;

export const StyledSearchContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 90px;
`;

export const StyledSearchTitle = styled.div`
  margin-bottom: 80px;
  font-size: ${fontPalette.font20};
  color: ${colorPalette.white};
  font-weight: 400;
  & > span {
    font-size: ${fontPalette.font20};
    color: ${colorPalette.lightPurple};
    font-weight: 700;
  }
`;

export const StyledSearchAlbumList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  justify-items: center;
`;

export const StyledSearchProfileList = styled.div`
  display: flex;
  flex-direction: column;
`;
