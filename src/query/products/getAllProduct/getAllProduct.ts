import { getAllProducts } from "@/services/Products"
import { useQuery } from "@tanstack/react-query"

 export const useGetAllProducts = ()=>{
    const result = useQuery({
        queryKey:['allProducts'],
        queryFn: getAllProducts,
        
    })
    return {
        ...result  ,
        data: result?.data
    }
}