// services/user/fatchCreateUser.ts
import axios from "axios";

export interface NewUser {
  username: string;
  email: string;
}

export const createUser = async (user: NewUser) => {
  const response = await axios.post("https://fakestoreapi.com/users", user);
  return response.data;
};
