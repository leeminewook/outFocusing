import config from "../config/config.json";
import axios from "axios";
import { IRegisterTypes } from "../../src/types/auth/auth.type";

export const handleRegister = async (
  registerDto: IRegisterTypes
): Promise<String> => {
  const url: string = `${config.server}/v1/auth/register`;
  const { data } = await axios.post<String>(url, registerDto);
  return data;
};
