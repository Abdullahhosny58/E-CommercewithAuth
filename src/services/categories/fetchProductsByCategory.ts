import axios from "axios";

export type TProduct = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

export const fetchProductsByCategory = async (category?: string): Promise<TProduct[]> => {
    if (!category) throw new Error("Category is required");

    const url = `https://fakestoreapi.com/products/category/${category}`;
    const response = await axios.get<TProduct[]>(url);
    return response.data;
};
