import axios from "axios"
export type TCategories = string[]

export const fetchServerCategories = async (): Promise<TCategories> => {
    const url = `https://fakestoreapi.com/products/categories`
    const response = await axios.get<TCategories>(url)
    return response.data

}