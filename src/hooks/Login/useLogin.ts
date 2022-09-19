import { useRecoilState } from "recoil";
import { handleLogin } from "../../../src/api/login.api";
import { loginAtom } from "../../../src/store/login";

const useLogin = () => {
  const [loginState, setLoginState] = useRecoilState(loginAtom);

  const onChangeLoginState = (e: any) => {
    setLoginState({ ...loginState, [e.target.name]: e.target.value });
    console.log(loginState);
  };

  const login = async () => {
    try {
      if (!Object.values(loginState).every((value) => value.length > 0)) {
        window.alert("NO");
        return;
      }
      const data = await handleLogin(loginState);
      return data;
    } catch (e: any) {
      console.error(e);
    }
  };
  return {
    loginState,
    setLoginState,
    onChangeLoginState,
    login,
  };
};

export default useLogin;
