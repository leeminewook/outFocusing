import config from "../config/config.json";
import axios from "axios";
import { ILoginTypes } from "../../src/types/auth/auth.type";
import { loginResponsTypes } from "../../src/types/login.types";

export const handleLogin = async (
  loginDto: ILoginTypes
): Promise<loginResponsTypes> => {
  const url: string = `${config.server}/v1/auth/login`;
  const { data } = await axios.post<loginResponsTypes>(url, loginDto);
  return data;
};
