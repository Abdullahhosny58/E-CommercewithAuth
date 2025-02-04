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
  quantity?: number; 
}

export interface Rating {
  rate: number;
  count: number;
}

export const fatctServerProduct = async (limit: number, ) => {
  const url = `https://fakestoreapi.com/products?limit=${limit}`;
  const response = await axios.get<TGetAllProducts>(url);
  return response?.data;
};
