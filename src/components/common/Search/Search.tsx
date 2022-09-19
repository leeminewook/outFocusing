import React from "react";
import SearchImg from "../../../assets/img/Search.svg";
import {
  StyledSearchContainer,
  StyledSearchImg,
  StyledSearchInput,
} from "./Search.style";

const Search = () => {
  return (
    <>
      <StyledSearchContainer>
        <StyledSearchInput placeholder="찾고 싶은 키워드를 검색하세요!" />
        <StyledSearchImg>
          <img src={SearchImg} />
        </StyledSearchImg>
      </StyledSearchContainer>
    </>
  );
};
export default Search;
