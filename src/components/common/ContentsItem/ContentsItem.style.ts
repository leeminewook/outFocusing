import styled from "styled-components";
import { colorPalette } from "../../../styles/ColorPalette";
import { fontPalette } from "../../../styles/FontPalette";

export const StyledContentsItem = styled.div`
  border-radius: 15px;
  box-sizing: border-box;
  position: relative;
  margin-right: 50px;
  & > img {
    width: 480px;
    height: 270px;
    box-sizing: border-box;
    border-radius: 15px;
  }
`;

export const StlyedContentsItemAlbum = styled.div`
  border-radius: 15px;
  box-sizing: border-box;
  margin-right: 60px;
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

export const StyledContentsItemAlbumText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  height: 22%;
  padding-top: 40px;
`;
export const StyledContentsItemAlbumTitle = styled.div`
  font-size: ${fontPalette.font20};
  color: ${colorPalette.white};
  font-weight: 400;
`;
export const StyledContentsItemAlbumSubTitle = styled.div`
  font-size: ${fontPalette.font16};
  color: ${colorPalette.lightGray};
  font-weight: 400;
`;

export const StyledHoveredContentsItem = styled.div<{ isHover: boolean }>`
  width: 480px;
  height: 270px;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 22px;
  opacity: ${(props) => (props.isHover ? "75%" : "100%")};
  position: ${(props) => (props.isHover ? "absolute" : "relative")};
  display: ${(props) => (props.isHover ? "block" : "none")};
  background-color: rgb(0, 0, 0);
`;

export const StyledContentsItemMakerName = styled.div`
  font-size: 16px;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 22px;
  margin-left: 22px;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    font-weight: 800;
  }
`;

export const StyledContentsItemAlbumName = styled.div`
  font-size: 16px;
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 22px;
  margin-right: 22px;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    font-weight: 800;
  }
`;

export const StyledContentsItemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  height: 100%;
  column-gap: 50px;
`;

export const StyledContentsItemHeart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  & > div {
    margin-right: 16px;
  }
`;

export const StyledContentsItemComment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  & > div {
    margin-right: 16px;
  }
`;
