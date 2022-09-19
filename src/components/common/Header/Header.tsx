import React from "react";
import {
  StyledHeaderContainer,
  StyledHeaderIconAddView,
  StyledHeaderIconBell,
  StyledHeaderIconChat,
  StyledHeaderIconProfile,
  StyledHeaderLogo,
  StyledHeaderSubIcons,
} from "./Header.style";
import Logo from "../../../assets/img/Logo.png";
import Bell from "../../../assets/img/bell.svg";
import Chat from "../../../assets/img/chat.svg";
import profile from "../../../assets/img/headerProfile.svg";
import addView from "../../../assets/img/addView.svg";
import Search from "../Search";

const Header = () => {
  return (
    <>
      <StyledHeaderContainer>
        <StyledHeaderLogo>
          <img src={Logo} />
        </StyledHeaderLogo>
        <Search />
        <StyledHeaderSubIcons>
          <StyledHeaderIconBell>
            <img src={Bell} />
          </StyledHeaderIconBell>
          <StyledHeaderIconChat>
            <img src={Chat} />
          </StyledHeaderIconChat>
          <StyledHeaderIconProfile>
            <img src={profile} />
          </StyledHeaderIconProfile>
          <StyledHeaderIconAddView>
            <img src={addView} />
          </StyledHeaderIconAddView>
        </StyledHeaderSubIcons>
      </StyledHeaderContainer>
    </>
  );
};

export default Header;
