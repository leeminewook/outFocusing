import react from "react";
import MainProfile from "./MainProfile";
import { StyledProfileRow, StyledProfileRowTitle } from "./Profile.style";

const Profile = () => {
  return (
    <>
      <StyledProfileRowTitle>추천 팔로워</StyledProfileRowTitle>
      <StyledProfileRow>
        <MainProfile />
        <MainProfile />
        <MainProfile />
        <MainProfile />
        <MainProfile />
        <MainProfile />
        <MainProfile />
      </StyledProfileRow>
    </>
  );
};

export default Profile;
