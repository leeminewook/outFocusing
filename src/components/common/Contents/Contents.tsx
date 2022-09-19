import React from "react";
import { ItemType } from "../../../types/theme/theme.type";
import ContentsItem from "../ContentsItem";
import { StyledContentsRow, StyledContentsTitle } from "./Contents.style";
// import item1 from "../../../assets/img/item1.png";
// import { ItemType } from "../../../types/theme/theme.type";

interface ContentsProps {
  title: string;
  pictures: Array<ItemType>;
}

const Contents = ({ title, pictures }: ContentsProps) => {
  // const pictures: Array<ItemType> = [
  //   {
  //     picture: item1,
  //     type: false,
  //     like: "2K",
  //     chat: 354,
  //     poster: "류한규",
  //     albumTitle: "일상 앨범",
  //   },
  //   {
  //     picture: item1,
  //     type: false,
  //     like: "2K",
  //     chat: 354,
  //     poster: "류한규",
  //     albumTitle: "일상 앨범",
  //   },
  //   {
  //     picture: item1,
  //     type: false,
  //     like: "2K",
  //     chat: 354,
  //     poster: "류한규",
  //     albumTitle: "일상 앨범",
  //   },
  //   {
  //     picture: item1,
  //     type: false,
  //     like: "2K",
  //     chat: 354,
  //     poster: "류한규",
  //     albumTitle: "일상 앨범",
  //   },
  //   {
  //     picture: item1,
  //     type: false,
  //     like: "2K",
  //     chat: 354,
  //     poster: "류한규",
  //     albumTitle: "일상 앨범",
  //   },
  // ];
  return (
    <>
      <StyledContentsTitle>{title}</StyledContentsTitle>
      <StyledContentsRow>
        <ContentsItem pictures={pictures} />
        <ContentsItem pictures={pictures} />
        <ContentsItem pictures={pictures} />
        <ContentsItem pictures={pictures} />
        <ContentsItem pictures={pictures} />
        <ContentsItem pictures={pictures} />
        <ContentsItem pictures={pictures} />
        <ContentsItem pictures={pictures} />
        <ContentsItem pictures={pictures} />
      </StyledContentsRow>
    </>
  );
};

export default Contents;
