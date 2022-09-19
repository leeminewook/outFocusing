import useLogin from "../../../../../src/hooks/Login/useLogin";
import useRegister from "../../../../../src/hooks/Register/useRegister";
import {
  StyledAuthInput,
  StyledInputName,
  StyledAuthInputContainer,
} from "./AuthInput.style";

interface AuthInputProps {
  text: string;
  type: string;
  name: string;
  isLogin?: boolean;
}

const AuthInput = ({ text, type, name, isLogin = false }: AuthInputProps) => {
  const { onChangeRegisterState } = useRegister();
  const { onChangeLoginState } = useLogin();
  return (
    <StyledAuthInputContainer>
      <StyledInputName>{text}</StyledInputName>

      <StyledAuthInput
        type={type}
        name={name}
        style={{ width: 300, height: 45 }}
        onChange={isLogin ? onChangeLoginState : onChangeRegisterState}
      ></StyledAuthInput>
    </StyledAuthInputContainer>
  );
};

export default AuthInput;
