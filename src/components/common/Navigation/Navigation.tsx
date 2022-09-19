import React from "react";
import { StyledNavigation } from "./Navigation.style";
import NavigationItem from "./NavigationItem";

const Navigation = () => {
  return (
    <>
      <StyledNavigation>
        <NavigationItem
          title="구분"
          text1="포스트"
          text2="앨범"
          text3="유저"
          text4=""
        />
        <NavigationItem
          title="정렬기준"
          text1="관련도"
          text2="업로드 날짜"
          text3="조회수"
          text4="북마크"
        />
      </StyledNavigation>
    </>
  );
};

export default Navigation;
