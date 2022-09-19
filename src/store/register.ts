import { atom } from "recoil";
import { IRegisterTypes } from "../types/auth/auth.type";

export const registerAtom = atom<IRegisterTypes>({
  key: "registerAtom",
  default: {
    userId: "",
    password: "",
    name: "",
    email: "",
    phoneNumber: "",
  },
});
