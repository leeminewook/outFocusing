import React from "react";
import useRegister from "../../../src/hooks/Register/useRegister";
import { colorPalette } from "../../styles/ColorPalette";
import AuthForm from "../common/AuthForm";
import AuthTitle from "../common/AuthTitle";
import Button from "../common/Button";
import DefaultTamplate from "../common/DefaultTamplate";
import AuthInput from "../common/Input/AuthInput";
import { StyledBtnContainer } from "./RegisterSubmit.style";

const RegisterSubmit = () => {
  const { register } = useRegister();
  return (
    <DefaultTamplate>
      <AuthForm height={787}>
        <AuthTitle text="회원가입" />
        <AuthInput text="이메일" type="text" name="email" />
        <AuthInput text="전화번호" type="text" name="phoneNumber" />
        <StyledBtnContainer>
          <Button
            width={150}
            text="돌아가기"
            margin={0}
            background={colorPalette.btnGray}
          />
          <Button
            width={150}
            text="가입하기"
            margin={0}
            background={colorPalette.darkPurple}
            handleClick={register}
          />
        </StyledBtnContainer>
      </AuthForm>
    </DefaultTamplate>
  );
};

export default RegisterSubmit;
