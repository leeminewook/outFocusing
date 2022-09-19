import React, { useEffect, useState } from "react";
import item1 from "../../../assets/img/item1.png";
import { ReactComponent as Comment } from "../../../assets/img/Comment.svg";
import { ReactComponent as Heart } from "../../../assets/img/Heart.svg";
import testImg from "../../../assets/img/testImg.png";
import { ItemType } from "../../../types/theme/theme.type";
import Album from "../Album";
import {
  StlyedContentsItemAlbum,
  StyledContentsItem,
  StyledContentsItemAlbumText,
  StyledContentsItemAlbumTitle,
  StyledContentsItemAlbumSubTitle,
  StyledHoveredContentsItem,
  StyledContentsItemMakerName,
  StyledContentsItemAlbumName,
  StyledContentsItemBox,
  StyledContentsItemHeart,
  StyledContentsItemComment,
} from "./ContentsItem.style";

interface ContentsItemProps {
  pictures: Array<ItemType>;
}

const ContentsItem = ({ pictures }: ContentsItemProps) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      {pictures[0].type ? (
        <StyledContentsItem
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <StyledHoveredContentsItem isHover={isHover}>
            <StyledContentsItemMakerName>류한규</StyledContentsItemMakerName>
            <StyledContentsItemAlbumName>
              일상앨범 &gt;
            </StyledContentsItemAlbumName>
            <StyledContentsItemBox>
              <StyledContentsItemHeart>
                <div>2K</div>
                <Heart width="20" height="18" fill="white" />
              </StyledContentsItemHeart>
              <StyledContentsItemComment>
                <div>254</div>
                <Comment width="20" height="18" fill="white" />
              </StyledContentsItemComment>
            </StyledContentsItemBox>
          </StyledHoveredContentsItem>
          <img src={testImg} alt={testImg} />
        </StyledContentsItem>
      ) : (
        // <StlyedContentsItemAlbum>
        //   <img src={item1} />
        //   <StyledContentsItemAlbumText>
        //     <StyledContentsItemAlbumTitle>
        //       Beautiful Nature Scene
        //     </StyledContentsItemAlbumTitle>
        //     <StyledContentsItemAlbumSubTitle>
        //       Kevin Luis
        //     </StyledContentsItemAlbumSubTitle>
        //   </StyledContentsItemAlbumText>
        // </StlyedContentsItemAlbum>
        <Album />
      )}
    </>
  );
};

export default ContentsItem;
