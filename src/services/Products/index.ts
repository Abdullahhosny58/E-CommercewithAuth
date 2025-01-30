import axios from "axios";

export type TGetAllProducts = Root2[];

export interface Root2 {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}


export const getAllProducts = async () => {
  const response = await axios.get<TGetAllProducts>("https://fakestoreapi.com/products");
  return response?.data;
};
