import { useQuery } from "@tanstack/react-query";
import { fatctServerProduct } from "@/services/Products/fatctServerProduct";

export const useGetAllProducts = (limit: number = 5) => {
  const result = useQuery({
    queryKey: ['allProducts', limit, ],
    queryFn: () => fatctServerProduct(limit),
  });

  return {  
    ...result,
    data: result?.data,
  };
};
