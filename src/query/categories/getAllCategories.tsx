import { fetchServerCategories } from "@/services/categories/fatctServerCategories"
import { useQuery } from "@tanstack/react-query"

export const useGetAllCategories= ()=>{
    const result = useQuery({
        queryKey:'getCategories',
        queryFn:fetchServerCategories
    })
    return {  
        ...result,
        data: result?.data,
      };
}