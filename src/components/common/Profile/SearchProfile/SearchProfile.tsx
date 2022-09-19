import React from "react";
import {
  StyledSearchProfile,
  StyledSearchProfileTitle,
  StyledSearchProfileImg,
  StyledSearchProfileText,
  StyledSearchProfileTextName,
  StyledSearchProfileTextIntroduce,
  StyledSearchProfileTextArea,
  StyledSearchProfileSub,
  StyledSearchProfileBtn,
} from "./SearchProfie.style";
import profile from "../../../../assets/img/mainProfile.png";
import Button from "../../Button";
import FollowingBtn from "../FollowingBtn";

const SearchProfile = () => {
  return (
    <>
      <StyledSearchProfile>
        <StyledSearchProfileTitle>
          <StyledSearchProfileImg>
            <img src={profile} />
          </StyledSearchProfileImg>
          <StyledSearchProfileText>
            <StyledSearchProfileTextName>
              Rea Arellano
            </StyledSearchProfileTextName>
            <StyledSearchProfileTextIntroduce>
              Where there is a will there is a way.
            </StyledSearchProfileTextIntroduce>
            <StyledSearchProfileTextArea>
              Paris, France
            </StyledSearchProfileTextArea>
          </StyledSearchProfileText>
        </StyledSearchProfileTitle>
        <StyledSearchProfileSub>
          <StyledSearchProfileBtn>Follow</StyledSearchProfileBtn>
        </StyledSearchProfileSub>
      </StyledSearchProfile>
    </>
  );
};

export default SearchProfile;
