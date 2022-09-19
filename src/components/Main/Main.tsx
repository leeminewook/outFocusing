import React from "react";
import { StyledContentsTitle } from "./Main.style";
import DefaultTamplate from "../common/DefaultTamplate";
import Contents from "../common/Contents";
import item1 from "../../assets/img/item1.png";
import { ItemType } from "../../types/theme/theme.type";
import Profile from "../common/Profile";
// @ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import test1 from "../../assets/img/test1.png";
import test2 from "../../assets/img/test2.png";
import test3 from "../../assets/img/test3.png";
import test4 from "../../assets/img/test4.png";

const Main = () => {
  const pictures: Array<ItemType> = [
    {
      picture: item1,
      type: false,
      like: "2K",
      chat: 354,
      poster: "류한규",
      albumTitle: "일상 앨범",
    },
    {
      picture: item1,
      type: false,
      like: "2K",
      chat: 354,
      poster: "류한규",
      albumTitle: "일상 앨범",
    },
    {
      picture: item1,
      type: false,
      like: "2K",
      chat: 354,
      poster: "류한규",
      albumTitle: "일상 앨범",
    },
    {
      picture: item1,
      type: false,
      like: "2K",
      chat: 354,
      poster: "류한규",
      albumTitle: "일상 앨범",
    },
    {
      picture: item1,
      type: false,
      like: "2K",
      chat: 354,
      poster: "류한규",
      albumTitle: "일상 앨범",
    },
  ];
  const pictures1: Array<ItemType> = [
    {
      picture: item1,
      type: true,
      like: "2K",
      chat: 354,
      poster: "류한규",
      albumTitle: "일상 앨범",
    },
    {
      picture: item1,
      type: true,
      like: "2K",
      chat: 354,
      poster: "류한규",
      albumTitle: "일상 앨범",
    },
    {
      picture: item1,
      type: true,
      like: "2K",
      chat: 354,
      poster: "류한규",
      albumTitle: "일상 앨범",
    },
    {
      picture: item1,
      type: true,
      like: "2K",
      chat: 354,
      poster: "류한규",
      albumTitle: "일상 앨범",
    },
    {
      picture: item1,
      type: true,
      like: "2K",
      chat: 354,
      poster: "류한규",
      albumTitle: "일상 앨범",
    },
  ];
  return (
    <>
      <DefaultTamplate>
        <Contents title="회원님의 최신 피드" pictures={pictures1} />
        <Contents
          title="북마크한 앨범이 업데이트 되었어요!"
          pictures={pictures}
        />
        <Contents title="새벽 감성" pictures={pictures1} />
        {/* <Contents title="추천 팔로워" pictures={pictures1} /> */}
        <Profile />
        <Contents title="앨범 추천" pictures={pictures} />
        <Contents title="회원님이 좋아하실 만한 포스트" pictures={pictures1} />
        {/* <MasonryLayout /> */}
        <Masonry columnsCount={5} gutter={20}>
          <img src={item1} />
          <img src={test3} />
          <img src={test4} />
          <img src={test4} />
          <img src={test3} />
          <img src={test2} />
          <img src={test3} />
          <img src={test1} />
          <img src={test2} />
          <img src={test2} />
          <img src={item1} />
          <img src={item1} />
          <img src={test3} />
          <img src={test4} />
          <img src={test4} />
          <img src={test3} />
          <img src={test2} />
          <img src={test3} />
          <img src={test1} />
        </Masonry>
      </DefaultTamplate>
    </>
  );
};

export default Main;
