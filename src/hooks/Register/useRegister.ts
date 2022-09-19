import { useRecoilState } from "recoil";
import { handleRegister } from "../../../src/api/register.api";
import { registerAtom } from "../../store/register";

const useRegister = () => {
  const [registerState, setRegisterState] = useRecoilState(registerAtom);

  const onChangeRegisterState = (e: any) => {
    setRegisterState({ ...registerState, [e.target.name]: e.target.value });
    console.log(registerState);
  };

  const register = async () => {
    try {
      if (!Object.values(registerState).every((value) => value.length > 0)) {
        window.alert("fuck");
        return;
      }

      console.log(registerState);
      const data = await handleRegister(registerState);
      return data;
    } catch (e: any) {
      console.error(e);
    }
  };

  return {
    register,
    setRegisterState,
    registerState,
    onChangeRegisterState,
  };
};

export default useRegister;
