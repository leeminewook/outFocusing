import React from "react";
import { StyledAuthForm } from "./AuthForm.style";

interface AuthFormProps {
  children: React.ReactNode;
  height: number;
}

const AuthForm = ({ children, height }: AuthFormProps) => {
  return (
    <>
      <StyledAuthForm style={{ height: height }}>{children}</StyledAuthForm>
    </>
  );
};

export default AuthForm;
