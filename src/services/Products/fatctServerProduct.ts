import axios from "axios";
import { TGetAllProducts } from ".";

export const fatctServerProduct = async (limit: number, ) => {
  const url = `https://fakestoreapi.com/products?limit=${limit}`;
  const response = await axios.get<TGetAllProducts>(url);
  return response?.data;
};
