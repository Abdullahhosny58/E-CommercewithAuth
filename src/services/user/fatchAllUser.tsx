import axios from "axios";

export interface User {
  id: number;
  username: string;
  email: string;
}

export const fetchServerUser = async (): Promise<User[]> => {
  const url = `https://fakestoreapi.com/users`;
  const response = await axios.get(url);
  return response?.data;
};