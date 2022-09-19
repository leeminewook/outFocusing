import React from "react";

import {
  StyledFollowingBtn,
  StyledFollowingBtnCover,
} from "./FollowingBtn.style";

interface FollowingBtnProps {
  text: string;
  opacityP: number;
  opacityB: number;
}

const FollowingBtn = ({ text, opacityP, opacityB }: FollowingBtnProps) => {
  return (
    <>
      <StyledFollowingBtn>{text}</StyledFollowingBtn>
      {/* <StyledFollowingBtnCover
        style={{ opacity: opacityB }}
      ></StyledFollowingBtnCover> */}
    </>
  );
};

export default FollowingBtn;
