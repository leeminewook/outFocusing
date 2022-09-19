import React from "react";
import {
  StyledProfileSubHeader,
  StyledProfileSubHeaderItem,
} from "./ProfileSubHeader.style";

const ProfileSubHeader = () => {
  return (
    <>
      <StyledProfileSubHeader>
        <StyledProfileSubHeaderItem>포스트</StyledProfileSubHeaderItem>
        <StyledProfileSubHeaderItem style={{ borderBottom: 0 }}>
          앨범
        </StyledProfileSubHeaderItem>
        <StyledProfileSubHeaderItem style={{ borderBottom: 0 }}>
          활동
        </StyledProfileSubHeaderItem>
      </StyledProfileSubHeader>
    </>
  );
};

export default ProfileSubHeader;
