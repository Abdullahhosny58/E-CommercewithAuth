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

// fatch by clinte
  export const getAllProducts = async (limit?: number) => {
    const response = await axios.get<TGetAllProducts>("https://fakestoreapi.com/products");
    const data = response?.data;

    if (limit) {
      return data.slice(0, limit);
    }

    return data;
  };