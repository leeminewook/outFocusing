import React from "react";
import {
  StyledMainProfile,
  StyledMainProfileLiveArea,
  StyledMainProfileName,
} from "./MainProfile.style";
import mainProfile from "../../../../assets/img/mainProfile.png";
import Button from "../../Button";
import { colorPalette } from "../../../../styles/ColorPalette";

const MainProfile = () => {
  return (
    <>
      <StyledMainProfile>
        <img src={mainProfile} />
        <StyledMainProfileName>Poll Swift</StyledMainProfileName>
        <StyledMainProfileLiveArea>Salvador, Brazil</StyledMainProfileLiveArea>
        <Button
          margin={35}
          text="Follow"
          width={142}
          background={colorPalette.darkPurple}
        />
        {/* <Button
          margin={35}
          text="Unfollow"
          width={142}
          background={colorPalette.btnGray}
        /> */}
      </StyledMainProfile>
    </>
  );
};

export default MainProfile;
