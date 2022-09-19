import React from "react";
import Navigation from "../common/Navigation";
import {
  StyledSearch,
  StyledSearchTitle,
  StyledSearchContent,
  StyledSearchAlbumList,
  StyledSearchProfileList,
} from "./Search.style";
// @ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import test1 from "../../assets/img/test1.png";
import test2 from "../../assets/img/test2.png";
import test3 from "../../assets/img/test3.png";
import test4 from "../../assets/img/test4.png";
import Album from "../common/Album";
import SearchProfile from "../common/Profile/SearchProfile";

const Search = () => {
  const text = "서울";
  return (
    <>
      <StyledSearch>
        <Navigation />
        <StyledSearchContent>
          <StyledSearchTitle>
            <span>{text}</span>에 대한 검색 결과
          </StyledSearchTitle>
          {/* <Masonry columnsCount={5} gutter={20}>
            <img src={test1} />
            <img src={test2} />
            <img src={test4} />
            <img src={test2} />
            <img src={test3} />
            <img src={test4} />
            <img src={test2} />
            <img src={test4} />
            <img src={test1} />
            <img src={test2} />
            <img src={test1} />
            <img src={test3} />
            <img src={test4} />
            <img src={test2} />
            <img src={test1} />
            <img src={test4} />
            <img src={test1} />
            <img src={test2} />
            <img src={test1} />
          </Masonry> */}
          {/* <StyledSearchAlbumList>
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
          </StyledSearchAlbumList> */}
          {/* <StyledSearchProfileList>
            <SearchProfile />
            <SearchProfile />
            <SearchProfile />
            <SearchProfile />
            <SearchProfile />
            <SearchProfile />
            <SearchProfile />
            <SearchProfile />
            <SearchProfile />
            <SearchProfile />
            <SearchProfile />
            <SearchProfile />
            <SearchProfile />
          </StyledSearchProfileList> */}
        </StyledSearchContent>
      </StyledSearch>
    </>
  );
};

export default Search;
