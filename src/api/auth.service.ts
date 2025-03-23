import { IUser } from "../interfaces";
import instance from "./api.service";

type LoginType = {
  accessToken: string,
  user: { email: string, id: number }
}
// Login
export const login = (data: IUser): Promise<LoginType> => {
  return instance.post("login", data)
}

// Register
// export const register = (data: IUser)
