"use client";
import { fetchMovie } from "@/services/movie";
import { useQuery } from "@tanstack/react-query";

const useGetMovie = () => {
  const result = useQuery({
    queryKey: ["movie"],
    queryFn: fetchMovie,
  });
  return {
    ...result,
    data: result?.data,
  };
};
export default useGetMovie;
