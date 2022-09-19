import React from "react";
import {
  StyledProfileCard,
  StyledProfileCardWrapper,
  StyledProfileCardMain,
  StyledProfileCardAreaEmail,
  StyledProfileCardFollowers,
  StyledProfileCardIntroduce,
  StyledProfileCardMainSubText,
  StyledProfileCardMainText,
  StyledProfileCardMainTextTitle,
  StyledProfileCardName,
  StyledProfileCardSub,
  StyledProfileCardMainWrapper,
} from "./ProfileCard.style";
import DefaultTamplate from "../../DefaultTamplate";
import cardImg from "../../../../assets/img/profilecard.png";
import profile from "../../../../assets/img/headerProfile.svg";
import followers from "../../../../assets/img/followers.png";
import email from "../../../../assets/img/email.png";
import location from "../../../../assets/img/location.png";
import dot from "../../../../assets/img/dot.png";
import FollowingBtn from "../FollowingBtn";

const ProfileCard = () => {
  return (
    <>
      <StyledProfileCard>
        <img src={cardImg} />
        <StyledProfileCardWrapper>
          <StyledProfileCardMain>
            <StyledProfileCardMainWrapper>
              <img src={profile} />
              <StyledProfileCardMainText>
                <StyledProfileCardMainTextTitle>
                  <StyledProfileCardName>Tamara Bitter</StyledProfileCardName>
                  <StyledProfileCardIntroduce>
                    Where there is a will there is a way.
                  </StyledProfileCardIntroduce>
                </StyledProfileCardMainTextTitle>
                <StyledProfileCardMainSubText>
                  <StyledProfileCardAreaEmail>
                    <img src={location} />
                    New York
                  </StyledProfileCardAreaEmail>
                  <StyledProfileCardAreaEmail>
                    <img src={email} />
                    example@gmail.com
                  </StyledProfileCardAreaEmail>
                  <StyledProfileCardFollowers>
                    <img src={followers} id="followers" />
                    <span>71</span> followers
                    <img src={dot} id="dot" />
                    <span>90</span> following
                  </StyledProfileCardFollowers>
                </StyledProfileCardMainSubText>
              </StyledProfileCardMainText>
            </StyledProfileCardMainWrapper>
            <StyledProfileCardSub>
              <FollowingBtn text="Follow" opacityP={0} opacityB={0} />
              <FollowingBtn text="Unfollow" opacityP={0} opacityB={0} />
            </StyledProfileCardSub>
          </StyledProfileCardMain>
        </StyledProfileCardWrapper>
      </StyledProfileCard>
    </>
  );
};

export default ProfileCard;
