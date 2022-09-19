import React from "react";
import {
  StlyedAlbum,
  StyledAlbumText,
  StyledAlbumTitle,
  StyledAlbumSubTitle,
} from "./Album.style";
import item1 from "../../../assets/img/item1.png";

const Album = () => {
  return (
    <>
      <StlyedAlbum>
        <img src={item1} />
        <StyledAlbumText>
          <StyledAlbumTitle>Beautiful Nature Scene</StyledAlbumTitle>
          <StyledAlbumSubTitle>Kevin Luis</StyledAlbumSubTitle>
        </StyledAlbumText>
      </StlyedAlbum>
    </>
  );
};

export default Album;
