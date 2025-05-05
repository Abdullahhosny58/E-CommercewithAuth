import { fetchServerUser } from "@/services/user/fatchAllUser";
import { useQuery } from "@tanstack/react-query";

export const useGetAllUser = () => {
  const result = useQuery({
    queryKey: ['allProducts'],
    queryFn: () => fetchServerUser(),
  });

  return {  
    ...result,
    data: result?.data,
  };
};
