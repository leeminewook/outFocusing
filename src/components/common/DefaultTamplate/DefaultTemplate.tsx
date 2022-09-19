import React from "react";
import { StyledTemplate } from "./DefaultTemplate.style";

interface DefaultTemplateProps {
  children: React.ReactNode;
}

const DefaultTemplate = ({ children }: DefaultTemplateProps) => {
  return <StyledTemplate>{children}</StyledTemplate>;
};

export default DefaultTemplate;
