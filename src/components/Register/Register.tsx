import { useNavigate } from "react-router-dom";
import { colorPalette } from "../../styles/ColorPalette";
import AuthForm from "../common/AuthForm";
import AuthTitle from "../common/AuthTitle";
import Button from "../common/Button";
import DefaultTamplate from "../common/DefaultTamplate";
import AuthInput from "../common/Input/AuthInput";

const Register = () => {
  const navigate = useNavigate();
  return (
    <DefaultTamplate>
      <AuthForm height={787}>
        <AuthTitle text="회원가입" />
        <AuthInput text="이름" type="text" name="name" />
        <AuthInput text="아이디" type="text" name="userId" />
        <AuthInput
          text="패스워드"
          type="password"
          name="password"
          isLogin={false}
        />
        <Button
          margin={89}
          text="계속하기"
          width={150}
          background={colorPalette.darkPurple}
          handleClick={() => {
            navigate("/register/submit");
          }}
        />
      </AuthForm>
    </DefaultTamplate>
  );
};

export default Register;
