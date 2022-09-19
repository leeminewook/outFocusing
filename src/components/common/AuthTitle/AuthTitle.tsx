import React from "react";
import Logo from "../../../assets/img/Logo.png";
import { StyledAuthTitle, StyledAuthTitleContainer } from "./AuthTitle.style";

interface AuthTitleProps {
  text: string;
}

const AuthTitle = ({ text }: AuthTitleProps) => {
  return (
    <StyledAuthTitleContainer>
      <img src={Logo} />
      <StyledAuthTitle>{text}</StyledAuthTitle>
    </StyledAuthTitleContainer>
  );
};

export default AuthTitle;
