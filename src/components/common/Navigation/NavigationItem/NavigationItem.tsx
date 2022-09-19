import React from "react";
import {
  StyledNavigationTitle,
  StyledNavigationItem,
  StyledNavigationContent,
} from "./NavigationItem.style";

interface NavigationItemProps {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}

const NavigationItem = ({
  title,
  text1,
  text2,
  text3,
  text4,
}: NavigationItemProps) => {
  return (
    <>
      <StyledNavigationItem>
        <StyledNavigationTitle>{title}</StyledNavigationTitle>
        <StyledNavigationContent>{text1}</StyledNavigationContent>
        <StyledNavigationContent>{text2}</StyledNavigationContent>
        <StyledNavigationContent>{text3}</StyledNavigationContent>
        <StyledNavigationContent>{text4}</StyledNavigationContent>
      </StyledNavigationItem>
    </>
  );
};

export default NavigationItem;
