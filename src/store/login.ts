import { atom } from "recoil";
import { ILoginTypes } from "../../src/types/auth/auth.type";

export const loginAtom = atom<ILoginTypes>({
  key: "loginAtom",
  default: {
    userId: "",
    password: "",
  },
});
