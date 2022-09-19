import react from "react";
import Button from "../common/Button";
import AuthInput from "../common/Input/AuthInput";
import {
  StyledLoginSubtitle,
  StyledRegisterBtn,
  StyledText,
  StyledLoginContainer,
  StyledLoginSubContainer,
} from "./Login.style";
import AuthForm from "../common/AuthForm";
import AuthTitle from "../common/AuthTitle";
import DefaultTamplate from "../common/DefaultTamplate";
import { colorPalette } from "../../styles/ColorPalette";
import useLogin from "../../../src/hooks/Login/useLogin";

const Login = () => {
  const { login } = useLogin();
  return (
    <DefaultTamplate>
      <StyledLoginContainer>
        <AuthForm height={580}>
          <AuthTitle text="아웃포커싱에 로그인" />
          <AuthInput text="아이디" type="text" name="userId" isLogin={true} />
          <AuthInput
            text="패스워드"
            type="password"
            name="password"
            isLogin={true}
          />
          <Button
            margin={80}
            text="로그인"
            width={262}
            background={colorPalette.darkPurple}
            handleClick={login}
          />
          <StyledText>비밀번호를 잊으셨나요?</StyledText>
        </AuthForm>
        <StyledText>혹은</StyledText>
        <StyledLoginSubContainer>
          <StyledLoginSubtitle>계정이 없으신가요?</StyledLoginSubtitle>
          <StyledRegisterBtn>계정 만들기</StyledRegisterBtn>
        </StyledLoginSubContainer>
      </StyledLoginContainer>
    </DefaultTamplate>
  );
};

export default Login;
